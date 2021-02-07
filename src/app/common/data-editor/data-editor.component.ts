import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  @Input() phraseString: string = '';
  @Input() searchKey: string = '';
  @Input() filterKey: string = '';
  @Input() list: Product[] = [];

  @Output() deleteClick: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  onDeleteButtonClick(product: Product): void {
    this.deleteClick.emit(product);
  }

  ngOnInit(): void {
  }

}
