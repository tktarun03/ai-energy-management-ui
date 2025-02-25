import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'energy-dashboard',
  styleUrl: 'energy-dashboard.css',
  shadow: true
})
export class EnergyDashboard {
  @State() energyStatus: string = "Analyzing energy usage...";

  analyzeEnergy() {
    const insights = [
      "⚡ Power Consumption: 78% of Daily Limit",
      "🌞 Solar Energy Contribution: 45% - Optimized Usage",
      "🔋 Battery Storage: 80% Full - Ready for Peak Hours",
      "📉 AI Prediction: Energy Demand Drop Expected Tomorrow",
      "🛠 Grid Stability: Normal - No Blackout Risk"
    ];
    this.energyStatus = insights[Math.floor(Math.random() * insights.length)];
  }

  render() {
    return (
      <div class="energy-box">
        <h2>AI Energy Management Dashboard</h2>
        <button onClick={() => this.analyzeEnergy()}>Analyze Energy Data</button>
        <p>{this.energyStatus}</p>
      </div>
    );
  }
}
