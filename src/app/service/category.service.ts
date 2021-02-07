import { Injectable } from '@angular/core';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  list: Category[] = [
    {
      id: 0,
      name: "Nagydobozos",
      description: "Nagydobozos PC játékok"
    },
    {
      id: 1,
      name: "DVD tokos",
      description: "DVD tokos PC játékok"
    },
    {
      id: 2,
      name: "Admin",
      description: "Admin page"
    },
  ]

  constructor() { }
}
