import {Component, OnChanges} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggle} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-montage',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSlideToggle
  ],
  templateUrl: './montage.component.html',
  styleUrl: './montage.component.scss'
})
export class MontageComponent implements OnChanges {
  numbers: number[] = [0,1,2,3,4,5,6,7,8,9];
  checkedValues: boolean[] = [false, false, false, false];
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
