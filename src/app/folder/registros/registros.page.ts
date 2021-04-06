import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType, ChartPoint } from 'chart.js';
import { IntensityData } from 'src/app/classes/IntensityData';
import { DataTransferService } from 'src/app/services/data-transfer.service'

@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {

  constructor( private dtService: DataTransferService ) { }


  private intensityValues:IntensityData[] = undefined;
  private intensityValuesToday:IntensityData[] = undefined;

  chartType: ChartType = "line"
  lightLevels: ChartDataSets[] = []

  chartOptions: ChartOptions = {
    responsive: false,
    maintainAspectRatio: true,
    scales: {
      xAxes: [{
        labels: ["Tiempo"],
        type: 'linear',
        position: 'bottom',
        ticks: {stepSize: 1}
      }],
      yAxes: [{
        labels: ["Intensidad"],
        type:'linear',
        position: 'right',
        ticks:{beginAtZero:true}
      }]
    },
    
  };

  ngOnInit() {
    this.getValues()
  }

  getValues() {

    this.lightLevels.push()
    this.dtService.getLastN(24).subscribe(
      (data: IntensityData[])=>{
        this.intensityValues = data;
        this.lightLevels[0] =
            {
              fill:true,
              borderColor: 'rgba(255,255,255,1)',
              backgroundColor: 'rgba(255,255,255,0.5)',
              label: "Test",
              data: this.intensityValues.map(
                (v, i) => {
                  return { x: i, y: v.Intensity }
                })
            }
      },
      (error)=>{
        console.error(error)
      }
    )

  }

}
