import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-lampe',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    MatSlideToggle,
    FormsModule
  ],
  templateUrl: './lampe.component.html',
  styleUrl: './lampe.component.scss'
})
export class LampeComponent {
  numbers: number[] = [0,1,2,3,4,5,6,7,8,9];
  checkedValues: boolean[] = [false, false, false, false, false];
  meters: number[] = [2.5, 3.0];
  totalPrice = 49;
  selectedPiece = 0;
  selectedMeter = 2.5;
  mobelPrice = 0;


  ngOnChanges(): void {
    console.log("Changed");
    this.calculateMobelPiece();
  }

  calculateMobelPiece(): void {
    this.mobelPrice = 49 + (this.selectedPiece * 10);
    this.totalPrice = this.mobelPrice;
  }

  calculateMeter(): void {
    if (this.selectedMeter >= 3) {
      this.totalPrice = this.mobelPrice + 10;
    } else {
      this.totalPrice = this.mobelPrice;
    }
  }
}
