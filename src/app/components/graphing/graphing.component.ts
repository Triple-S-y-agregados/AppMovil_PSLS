import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'graph-component',
  templateUrl: './graphing.component.html',
  styleUrls: ['./graphing.component.scss'],
})
export class GraphingComponent implements OnInit {
  
  chartType: ChartType = "line"
  lightLevels: ChartDataSets[] = []

  chartOptions: ChartOptions = {
    responsive: false,
    maintainAspectRatio: true,
    scales: {
      xAxes: [{
        labels: ["Hora"],
        type: 'linear',
        position: 'bottom',
        ticks: {stepSize: 1}
      }]
    },
    
  };

  constructor( private dataTransfer : DataTransferService ) { }

  ngOnInit() {
    let data = [
      {x: 1, y: 1}, {x: 2, y: 2},
      {x: 3, y: 3}, {x: 4, y: 2},
      {x: 5, y: 1},
    ];
    
    this.lightLevels.push({
      label: "Label", 
      data: data
    })

   }


}
