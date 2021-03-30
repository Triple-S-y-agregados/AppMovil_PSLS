import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'graph-component',
  templateUrl: './graphing.component.html',
  styleUrls: ['./graphing.component.scss'],
})
export class GraphingComponent implements OnInit {
  
  public chart: Chart;

  constructor() { }

  ngOnInit() {
    let data = {
      datasets: [{
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [10, 20, 30, 40, 50, 60, 70]
      }]
    };
    let options = {
      scales: {
          xAxes: [{
              gridLines: {
                  offsetGridLines: true
              }
          }]
      }
  };
    this.createChart(data, options);
  }

  createChart( data, options ){
    var canvas = <HTMLCanvasElement> document.getElementById('myChart');
    var ctx = canvas.getContext('2d');
    var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45]
      }]
    },
    options: { }
    });
  
  }
}
