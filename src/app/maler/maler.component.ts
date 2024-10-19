import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-maler',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    MatSlideToggle,
    FormsModule,
    MatInput
  ],
  templateUrl: './maler.component.html',
  styleUrl: './maler.component.scss'
})
export class MalerComponent {
  meters: number[] = [2.5, 3.0];
  selectedMeter = 2.5;
  totalPrice = 49;
  checkedValues: boolean[] = [false, false];
  quadratMeter: number = 0;

  calculateTotalPrice():void {
      if (this.checkedValues[0]) {
        this.totalPrice = 49;
      }
  }
}
