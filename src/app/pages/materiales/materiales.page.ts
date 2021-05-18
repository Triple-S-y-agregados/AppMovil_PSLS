import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.page.html',
  styleUrls: ['./materiales.page.scss'],
})
export class MaterialesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  materiales=[
    "DOIT ESP32 DESKIV v1",
    "Panel Solar 12V 100mA",
    "Led ultrabrillante blanco",
    "4 resistencias 10K<span>&#8486;</span>",
    "4 resistencias 300<span>&#8486;</span>",
    "1 resistencia 390<span>&#8486;</span>",
    "2 Servo Mg995 Servomotores",
    "Convertidor de nivel lógico",
    "Fotorresistencia/LDR (4 LDR)",
    "Regulador de voltaje L7805",
    "Capacitor cerámico de disco",
    "Capacitor electrolítico radial",
    "Pila alcalina 9V",
    "Cables DuPont jumper",
    "Protoboard (2 protoboard)",
    "Broche de pila",
    "Estaño",
    "Cables",
    "Placa fenólica perforada"
  ]

}
