import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'graph-component',
  templateUrl: './graphing.component.html',
  styleUrls: ['./graphing.component.scss'],
})
export class GraphingComponent implements OnInit {
  
  lightLevels: ChartDataSets[] = []

  chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom',
        ticks: {stepSize: 1}
      }]
    }
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
