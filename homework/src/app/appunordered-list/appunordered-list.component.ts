import { Component } from '@angular/core';

@Component({
  selector: 'app-appunordered-list',
  templateUrl: './appunordered-list.component.html',
  styleUrls: ['./appunordered-list.component.css'],
})
export class AppunorderedListComponent {
  list: string[] = ['first', 'second', 'third', 'fourth', 'fifth'];

  displayList(listArray: string[]) {
    this.list = listArray;
  }
}
