import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.css'],
  standalone: false
})
export class SettingsModalComponent {
  @Output() close = new EventEmitter<void>();

  fonts = [
    { label: 'Poppins (Sans)', value: 'poppins' },
    { label: 'Inter (Sans)', value: 'inter' },
    { label: 'Roboto (Sans)', value: 'roboto' },
    { label: 'Source Sans 3 (Sans)', value: 'source' },
    { label: 'Nunito (Sans)', value: 'nunito' },
    { label: 'Serif (Merriweather)', value: 'serif' },
    { label: 'Mono (JetBrains Mono)', value: 'mono' }
  ];

  motions = [
    { label: 'Full', value: 'full' },
    { label: 'Reduced', value: 'reduced' },
    { label: 'Off', value: 'none' }
  ];

  themes = [ 'light', 'dark', 'cosmic' ];

  currentFont = 'sans';
  currentMotion = 'full';
  currentTheme = 'light';

  pendingFont = '';
  pendingMotion = '';
  pendingTheme = '';

  previewFont = true;
  previewMotion = false;
  previewTheme = false;

  constructor(private theme: ThemeService, private toast: ToastService) {
    this.currentFont = this.theme.getFont();
    this.currentMotion = this.theme.getMotion();
    this.currentTheme = this.theme.getTheme();
    this.pendingFont = this.currentFont;
    this.pendingMotion = this.currentMotion;
    this.pendingTheme = this.currentTheme;
  }

  async previewApplyFont(p: string){
    if(!p) return;
    try{
      await this.theme.loadFont(p);
      // set attribute for preview (do not persist)
      document.documentElement.setAttribute('data-font', p);
    }catch(e){
      console.warn('Font load failed', e);
    }
  }

  previewApplyMotion(m: string){
    if(!m) return;
    // apply temporarily (do not persist)
    document.documentElement.setAttribute('data-motion', m=== 'full' ? '' : m);
  }

  previewApplyTheme(t: string){
    if(!t) return;
    // apply temporarily (do not persist)
    document.documentElement.setAttribute('data-theme', t);
  }

  async apply(){
    // persist font and motion using ThemeService
    try{
      await this.theme.loadFont(this.pendingFont);
      this.theme.setFont(this.pendingFont);
      this.theme.setMotion(this.pendingMotion);
      this.theme.setTheme(this.pendingTheme);
      this.toast.show('Appearance updated', 2200);
      this.close.emit();
    }catch(e){
      this.toast.show('Failed to apply appearance', 3000);
      console.error(e);
    }
  }

  cancel(){
    // revert any temporary previews
    this.theme.setFont(this.currentFont);
    this.theme.setMotion(this.currentMotion);
    this.theme.setTheme(this.currentTheme);
    this.close.emit();
  }
}
