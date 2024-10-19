import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {ServicesComponent} from "./services/services.component";
import {MontageComponent} from "./montage/montage.component";
import {SchlusselComponent} from "./schlussel/schlussel.component";
import {MalerComponent} from "./maler/maler.component";
import {HandwerkComponent} from "./handwerk/handwerk.component";
import {SanitarComponent} from "./sanitar/sanitar.component";
import {ElektroComponent} from "./elektro/elektro.component";
import {LampeComponent} from "./elektro/lampe/lampe.component";
import {ElekComponent} from "./elektro/elek/elek.component";
import {ItComponent} from "./elektro/it/it.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services',
    component: ServicesComponent,
    children: [
      {
        path: 'montage',
        component: MontageComponent
      },
      {
        path: 'schlüssel',
        component: SchlusselComponent
      },
      {
        path: 'maler',
        component: MalerComponent
      },
      {
        path: 'handwerk',
        component: HandwerkComponent
      },
      {
        path: 'sanitar',
        component: SanitarComponent
      },
      {
        path: 'elektro',
        component: ElektroComponent,
        children: [
          {
            path: 'lampe',
            component: LampeComponent,
          },
          {
            path: 'elek',
            component: ElekComponent,
          },
          {
            path: 'it',
            component: ItComponent,
          }
        ]
      },
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
