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
  
}
