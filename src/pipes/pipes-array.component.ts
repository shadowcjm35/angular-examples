import { Component, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';

@Pipe({
  standalone: true,
  name: 'sumPipe',
})
export class SumPipe implements PipeTransform {
  transform(array: number[]): number {
    console.log("Appel pipe")
    return array.reduce((a, b) => a + b, 0)
  }
}

@Component({
  standalone: true,
  imports: [CommonModule, SumPipe],

  selector: 'app-root',
  template: `
  <div (mouseover)="0" class="border">
    <div *ngFor="let nombre of tableau; index as index" > {{ nombre }}
        <button (click)="increment(index)">{{'Incrément index ' + index}} </button>
    </div> 
    <button (click)="addElement()">Ajouter</button>
    <button (click)="removeElement()">Supprimer</button>
    Somme des éléments : {{ tableau | sumPipe }}
  </div>
  `,
  styles: ['']
})
export class PipesArrayComponent {

  tableau: number[] = [...Array(5)].map((_, index) => index)

  increment(index: number): void {
    this.tableau[index] += 1
  }

  addElement(): void {
    this.tableau.push(this.tableau.length)
  }

  removeElement(): void {
    this.tableau.pop()
  }
}