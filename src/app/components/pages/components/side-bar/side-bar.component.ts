import {Component, ElementRef, OnDestroy} from '@angular/core';
import {LayoutService} from "../../../../services/layout.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnDestroy{
  constructor(public layoutService: LayoutService, public el: ElementRef) {}

  get logoColor() {
    let logo;

    if(this.layoutService.config.colorScheme == 'light'){
      logo = (this.layoutService.config.menuTheme === 'white' || this.layoutService.config.menuTheme === 'orange') ? 'dark' : 'white';
    }
    else {
      logo = 'dark';
    }
    return logo;
  }

  resetOverlay() {
    if(this.layoutService.state.overlayMenuActive) {
      this.layoutService.state.overlayMenuActive = false;
    }
  }

  ngOnDestroy() {
    this.resetOverlay();
  }

}
