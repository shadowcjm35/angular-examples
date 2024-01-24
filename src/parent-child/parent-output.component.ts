import { Component, EventEmitter, Output } from '@angular/core';
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
export class ChildOutpuComponent {

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
  imports: [CommonModule, ChildOutpuComponent],
  template: `
  <div class="border">
    <div>Valeur dans le père : {{value}} <button (click)="addValue()">Value++</button> </div>
    
    <app-child (valueChange)="value=$event"> </app-child>
  </div>
  `,
  styles: ['']
})
export class ParentOutputComponent {

  value: number = 10;

  addValue() {
    this.value++
  }

}
