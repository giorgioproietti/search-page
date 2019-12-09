import { Component, OnInit, ViewChild} from '@angular/core';
import { onSideNavChange } from '../../animations/animations';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],
  animations: [onSideNavChange],
})
export class LeftMenuComponent implements OnInit {

  public sideNavState: boolean = false;

  constructor(private _sidenavService: SidenavService) { }

  ngOnInit() {
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState
  }

};
