import {Component, OnInit} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatTabLink, MatTabNav, MatTabNavPanel} from "@angular/material/tabs";
import {NgClass} from "@angular/common";

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
    MatTabNav,
    MatTabNavPanel,
    NgClass
  ],
  templateUrl: './elektro.component.html',
  styleUrl: './elektro.component.scss'
})
export class ElektroComponent implements OnInit {
  links = ['lampe', 'elek', 'it' ];
  activeLink = this.links[0];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const currentPath = this.route.snapshot.firstChild?.url[0]?.path;
    if (currentPath && this.links.includes(currentPath)) {
      this.activeLink = currentPath;

    } else {
      this.activeLink = '';
    }
  }

  setActiveLink(link: string) {
    this.activeLink = link;
  }
}
