import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public navItems = [
    {
      title: 'Home',
      route: 'home',
      icon: 'home',
    },
    {
      title: 'Dashboard',
      route: 'dashboard',
      icon: 'dashboard',
    },
    {
      title: 'Generate Password',
      route: 'passwprd-generator',
      icon: 'password',
    },
    {
      title: 'Cards',
      route: 'cards',
      icon: 'picture_in_picture',
    },
    {
      title: 'Typing',
      route: 'typing',
      icon: 'keyboard',
    },
  ];

  constructor(private router: Router) { }
  ngOnInit() { }
 
 
}
