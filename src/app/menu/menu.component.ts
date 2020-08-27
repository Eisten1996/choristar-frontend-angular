import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems: any[];
  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {name: 'Principal', icon: 'home', router: 'home'},
      {name: 'Mi Perfil', icon: 'person', router: 'profile'},
      {name: 'Mis Servicios', icon: 'desktop_windows', router: 'services'},
      {name: 'Mis reclamaciones', icon: 'question_answer', router: 'claims'},
      {name: 'Mis solicitudes', icon: 'touch_app', router: 'requests'}];
  }

}
