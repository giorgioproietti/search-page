import { Component, OnInit, Input  } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-vertical-navbar',
  templateUrl: './vertical-navbar.component.html',
  styleUrls: ['./vertical-navbar.component.css']
})
export class VerticalNavbarComponent implements OnInit {

  @Input() sidenav: MatSidenav

  constructor() { }

  ngOnInit() {
  }

}