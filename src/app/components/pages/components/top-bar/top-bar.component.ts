import {Component, ElementRef, ViewChild} from '@angular/core';
import {SideBarComponent} from "../side-bar/side-bar.component";
import {LayoutService} from "../../../../services/layout.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild(SideBarComponent) appSidebar!: SideBarComponent;

  constructor(public layoutService: LayoutService, public el: ElementRef) { }


  onMenuButtonClick() {
    this.layoutService.onMenuToggle();
  }

  onProfileButtonClick() {
    this.layoutService.showRightMenu();
  }

  onSearchClick() {
    this.layoutService.toggleSearchBar();
  }

  onRightMenuClick() {
    this.layoutService.showRightMenu();
  }

  get logo() {
    const logo = this.layoutService.config.menuTheme === 'white' || this.layoutService.config.menuTheme === 'orange' ? 'dark' : 'white';
    return logo;
  }

}
