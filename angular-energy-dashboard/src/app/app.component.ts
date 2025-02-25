import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AI Energy Management UI Dashboard</h1>
    <div class="dashboard">
      <energy-dashboard></energy-dashboard>
      <wasm-energy-analysis></wasm-energy-analysis>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }