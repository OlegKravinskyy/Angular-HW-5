import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-unordered-list',
  templateUrl: './unordered-list.component.html',
  styleUrls: ['./unordered-list.component.css'],
})
export class UnorderedListComponent {
  @Input() list?: string[];
}
