import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
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
