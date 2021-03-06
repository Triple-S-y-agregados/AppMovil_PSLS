import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType, ChartPoint } from 'chart.js';
import { Record } from 'src/app/classes/Record';
import { DataTransferService } from 'src/app/services/data-transfer.service'

@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {

  constructor( private dtService: DataTransferService ) { }

  private foundData:boolean = false;
  private intensityValues:Record[] = undefined;
  
  chartType: ChartType = "line"
  lightLevels: ChartDataSets[] = []

  chartOptions: ChartOptions = {
    responsive: false,
    maintainAspectRatio: true,
    scales: {
      xAxes: [{
        display: false,
        labels: ["Tiempo"],
        type: 'linear',
        position: 'bottom',
        ticks: {stepSize: 1}
      }],
      yAxes: [{
        labels: ["Voltaje"],
        type:'linear',
        position: 'right',
        ticks:{ beginAtZero:true }
      }]
    },
    
  };

  ngOnInit() {
    this.foundData = false;
    this.getValues()
  }

  getValues() {

    this.lightLevels.push()
    this.dtService.getLastN(24).subscribe(
      (data: Record[])=>{
        this.foundData = true;
        this.intensityValues = data;
        this.lightLevels[0] =
            {
              fill:true,
              pointBorderColor: 'none',
              label: "Panel Solar",
              data: this.intensityValues.map(
                (v, i) => {
                  return { x: i, y: v.voltage }
                })
            }
      },
      (error)=>{
        alert("No se pudo conectar a la API, verifique que la dirección ip sea correcta y que esta esté conectada");
        console.error(error);
      }
    )

  }

}
