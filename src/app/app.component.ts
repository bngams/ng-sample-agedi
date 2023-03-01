// import <=> java => reference une classe d'un autre fichier
import { Component } from '@angular/core';

// @ => Decorator (annotation)
@Component({
  selector: 'app-root', // balise <app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // template: `
  //   <h1>Hello</h1>
  // `,
  // styles: ['h1 { color: red; }']
})
// export class <=> public class
export class AppComponent {
  title = 'my-app';
  // today: Date = new Date();
  today = new Date();
  imgUrl = 'https://picsum.photos/200';
  imgAlt = 'Lorem picsum';
  isDisabled = true;
  logoColor = 'dark';
  words: Array<string> = [ 'Hello', 'world', '!'];
  users: Array<any> = [
    { id: 1, name: 'Boris'},
    { id: 2, name: 'Eddz'}
  ]

  buttonClicked(): void {
    alert('Clic sur le bouton');
  }

  toggleButtonStatus(): void {
    this.isDisabled = !this.isDisabled;
  }
}
