import { Component } from '@angular/core';

@Component({
  selector: 'has-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })

  
  export class AppComponent {
  title = 'uhuhhhhhhhhhhuuuuuuuuuuuuuuuuuu ';
  foto = "favicon.ico";
  peso = 100;
  altura =80;
  
  IMC(){
    alert (this.peso / (this.altura*this.altura));
  }
  
  exibir(){
    alert(this.title);
   
    }

}
