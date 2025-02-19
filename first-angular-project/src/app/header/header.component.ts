import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
num1 = 10;
num2 = 20;
imgURL: string = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg';
isDisabled: boolean=true;
isActive: boolean=true;
}
