import {Component, ElementRef, ViewChild} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [
    MatIcon,
    RouterLink
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  @ViewChild('navbarText') navbarText!: ElementRef;

  closeNavbar() {
    const navbar = this.navbarText.nativeElement;
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }

}
