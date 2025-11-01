import { Component, OnInit } from '@angular/core';
import { RequestMetricsService, RequestMetric } from '../../services/request-metrics.service';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css'],
  standalone: false
})
export class MetricsComponent implements OnInit {
  metrics: RequestMetric[] = [];

  constructor(private metricsSvc: RequestMetricsService) {}

  ngOnInit(): void {
    this.metrics = this.metricsSvc.getAll();
  }

  refresh(){ this.metrics = this.metricsSvc.getAll(); }

  exportCSV(){
    const rows = [ ['time','method','url','status','durationMs'] ];
    for(const m of this.metrics){ rows.push([new Date(m.time).toISOString(), m.method, m.url, String(m.status||''), String(m.durationMs)]); }
    const csv = rows.map(r=> r.map(v=> '"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'request-metrics.csv'; a.click();
    URL.revokeObjectURL(url);
  }
}
