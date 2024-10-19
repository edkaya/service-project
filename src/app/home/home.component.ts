import {Component, HostListener, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {
  MatStep,
  MatStepper,
  MatStepperIcon,
  MatStepperNext,
  MatStepperPrevious,
  StepperOrientation
} from "@angular/material/stepper";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {map, Observable, startWith} from "rxjs";
import {BreakpointObserver} from "@angular/cdk/layout";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    MatStepper,
    MatStep,
    MatButton,
    MatStepperPrevious,
    MatStepperNext,
    MatIcon,
    MatStepperIcon,
    AsyncPipe
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  orientation: StepperOrientation = 'horizontal';

  constructor() {
    this.setStepperOrientation(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const target = event.target as Window;
    this.setStepperOrientation(target.innerWidth);
  }

  private setStepperOrientation(width: number): void {
    this.orientation = width < 570 ? 'vertical' : 'horizontal';
  }
}
