import { Injectable } from '@angular/core';

export interface RequestMetric { url: string; method: string; durationMs: number; status?: number; time: number }

@Injectable({ providedIn: 'root' })
export class RequestMetricsService {
  private metrics: RequestMetric[] = [];

  record(metric: RequestMetric){
    this.metrics.push(metric);
    // keep bounded
    if(this.metrics.length > 1000) this.metrics.shift();
    // optionally log aggregated values occasionally
    if(this.metrics.length % 50 === 0){
      const avg = this.metrics.reduce((s,m)=>s+m.durationMs,0)/this.metrics.length;
      console.info('[Perf] Recorded', this.metrics.length, 'requests; avg', Math.round(avg),'ms');
    }
  }

  getAll(){ return this.metrics.slice().reverse(); }
}
