import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatTabLink, MatTabNav} from "@angular/material/tabs";

@Component({
  selector: 'app-elektro',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    MatSlideToggle,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    MatTabLink,
    MatTabNav
  ],
  templateUrl: './elektro.component.html',
  styleUrl: './elektro.component.scss'
})
export class ElektroComponent {
  links = ['lampe', 'elek', 'it' ];
  activeLink = this.links[0];

  setActiveLink(link: string) {
    this.activeLink = link;
  }
}
