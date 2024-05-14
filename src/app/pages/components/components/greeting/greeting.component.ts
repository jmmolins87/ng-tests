import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  public message: string = 'Hello, World!';
  public idParagraph: string = 'paragraphId';
  public idInput: string = 'text';
  public placeholderInput: string = 'Escriba su texto';
  public messageOtherAlert: string = 'Esta es la alerta del componente alert en el componente de bienvenida';
  public textLifeCicle: string = 'Texto de prueba para el componente life-cicle';
  public textLifeCicleInterval: string = 'Texto de prueba para el componente life-cicle';

  constructor() { 
    setTimeout(() => {
      this.message = 'Hello, Angular!';
      this.idParagraph = 'newParagraphId';
      this.idInput = 'password';
      this.placeholderInput = 'Escriba su contraseña';
    }, 2000)
  }

  ngOnInit(): void {
    let cont = 0;
    setInterval(() => {
      this.textLifeCicleInterval = `Texto interval ${ cont++ }`;
    }, 2000)
  }

  showGreeting(): string {
    return 'Hello from method!!';
  }

}
