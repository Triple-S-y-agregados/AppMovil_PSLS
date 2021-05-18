import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyect-info',
  templateUrl: './proyect-info.page.html',
  styleUrls: ['./proyect-info.page.scss'],
})
export class ProyectInfoPage implements OnInit {

  information=[
      {
      title: "Descripcion del Proyecto",
      description: "El proyecto consistirá en un seguidor solar con un panel fotovoltaico incluido, el cual se manejará solo mediante fotorresistores, al igual que se podrá ser manejado también de forma manual mediante una aplicación web, donde además se podrá visualizar la intensidad de luz y los dos ángulos de inclinación del panel solar (el movimiento será en dos ejes), la cual se conectará mediante internet."
    },
    {
      title: "Importancia",
      description: "Las energías renovables forman cada vez una parte más importante de nuestras vidas, ya que nos ayudan a evitar contaminar tanto sin afectar a nuestras vidas en gran medida. <br><br>"
      + "El proyecto que vamos a realizar tiene una gran área de utilidad ya que permite optimizar el proceso de obtención de energía de cada panel individual, ya que el panel se encargará de seguir los rayos del sol para maximizar la recolección de energía, de esta forma podemos obtener una mayor cantidad de luz obtenida utilizando menos paneles solares, lo que a su vez reduce el costo."
    },
    {
      title: "Alcances",
      description: "La idea es realizar un modelo en miniatura de un seguidor solar, se espera que este modelo tenga la capacidad de recolectar la energía que produzca el panel. "+
      "El seguidor solar debe ser capaz de posicionar el panel en el ángulo tal que la luz incida contra el panel de manera perpendicular, haciendo que la energía obtenida sea óptima (o al menos una aproximación sensible de la óptima). " +
      "<br><br>" + 
      "Este proyecto será presentado en una maqueta para añadir estética al panel solar, mostrando un casa, con una banca y un farol, el cual tendrá un led que funcionará mediante la energía del panel solar, es decir, en la maqueta se alimentara un farol utilizando únicamente energía producida por el panel solar, mostrando la eficacia y un ejemplo de utilidad del proyecto."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
