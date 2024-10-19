import {Component, OnInit} from '@angular/core';
import {MatTab, MatTabGroup, MatTabLink, MatTabNav, MatTabNavPanel} from "@angular/material/tabs";
import {ActivatedRoute, RouterLink, RouterOutlet} from "@angular/router";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    RouterLink,
    RouterOutlet,
    MatTabLink,
    MatTabNav,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    MatSlideToggle,
    NgClass,
    MatTabNavPanel
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  links = ['montage', 'schlüssel', 'maler', 'handwerk', 'sanitar', 'elektro'];
  activeLink = '';

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
