import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
