import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="border">
      <div>Valeur dans le fils : {{value}} <button (click)="addValue()">Value++</button></div>
    </div>
  `,
  styles: ['']
})
export class ChildIOComponent {

  @Input()
  value: number = 10;

  @Output()
  valueChange: EventEmitter<number> = new EventEmitter()

  addValue() {
    this.value++
    this.valueChange.emit(this.value)
  }

}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ChildIOComponent],
  template: `
  <div class="border">
    <div>Valeur dans le père : {{value}} <button (click)="addValue()">Value++</button> </div>
    
    <app-child [value]="value" (valueChange)="value=$event"> </app-child>
  </div>
  `,
  styles: ['']
})
export class ParentIOComponent {

  value: number = 10;

  addValue() {
    this.value++
  }

}
