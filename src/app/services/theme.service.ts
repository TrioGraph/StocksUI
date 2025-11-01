import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ThemeService {
  private key = 'stock_ui_theme';
  private fontKey = 'stock_ui_font';
  private motionKey = 'stock_ui_motion';
  private loadedFonts = new Set<string>();

  setTheme(name: string){
    document.documentElement.setAttribute('data-theme', name);
    localStorage.setItem(this.key, name);
  }

  setFont(name: string){
    // name: font id (poppins, inter, roboto, source, nunito, serif, mono)
    this.loadFont(name).finally(()=>{
      document.documentElement.setAttribute('data-font', name);
      localStorage.setItem(this.fontKey, name);
    });
  }

  /**
   * Load Google font family for given font id lazily.
   */
  loadFont(id: string): Promise<void>{
    if(!id) return Promise.resolve();
    if(this.loadedFonts.has(id)){
      return Promise.resolve();
    }
    const map: Record<string,string> = {
      poppins: 'Poppins:wght@300;400;600;700',
      inter: 'Inter:wght@300;400;600;700',
      roboto: 'Roboto:wght@300;400;500;700',
      source: 'Source+Sans+3:wght@300;400;600',
      nunito: 'Nunito:wght@300;400;700',
      serif: 'Merriweather:wght@300;400;700',
      mono: 'JetBrains+Mono:wght@400;600'
    };
    const family = map[id] || map['inter'];
    // construct href
    const href = `https://fonts.googleapis.com/css2?family=${family}&display=swap`;
    return new Promise((res,rej)=>{
      try{
        const exists = Array.from(document.getElementsByTagName('link')).some(l=>l.href===href);
        if(exists){ this.loadedFonts.add(id); res(); return; }
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.onload = ()=>{ this.loadedFonts.add(id); res(); };
        link.onerror = (e)=>{ rej(e); };
        document.head.appendChild(link);
      }catch(e){ rej(e); }
    });
  }

  setMotion(mode: string){
    // mode: 'full' | 'reduced' | 'none'
    const val = mode === 'full' ? '' : mode; // empty means default (no attribute)
    if(val){
      document.documentElement.setAttribute('data-motion', val);
      localStorage.setItem(this.motionKey, val);
    } else {
      document.documentElement.removeAttribute('data-motion');
      localStorage.removeItem(this.motionKey);
    }
  }

  getTheme(): string{
    return localStorage.getItem(this.key) || document.documentElement.getAttribute('data-theme') || 'light';
  }

  getFont(): string{
    return localStorage.getItem(this.fontKey) || document.documentElement.getAttribute('data-font') || 'sans';
  }

  getMotion(): string{
    return localStorage.getItem(this.motionKey) || document.documentElement.getAttribute('data-motion') || 'full';
  }
}
