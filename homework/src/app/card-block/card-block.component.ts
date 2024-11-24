import {
  Component,
  EventEmitter,
  Input,
  Output,
  AfterViewInit,
  ContentChild,
  ElementRef,
} from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  color: string;
}

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css'],
})
export class CardBlockComponent implements AfterViewInit {
  @Input() product?: Product;
  @Input() discountedPrice?: number;
  @Output()
  viewDetails = new EventEmitter<Product>();

  @ContentChild('colorElement', { static: false }) colorElement?: ElementRef;

  ngAfterViewInit() {
    if (this.colorElement) {
      this.colorElement.nativeElement.style.backgroundColor =
        this.colorElement.nativeElement.textContent.trim();
    }
  }
  onViewDetails() {
    this.viewDetails.emit(this.product);
  }
}
