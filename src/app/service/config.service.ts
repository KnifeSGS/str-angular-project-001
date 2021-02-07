import { Injectable } from '@angular/core';
import { CategoryService } from './category.service';


export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'ALT+F4 webshop';
  linkTitles = [this.categoryService.list[0].name, this.categoryService.list[1].name, this.categoryService.list[2].name];

  menuItems: IMenuItem[] = [
    { text: 'Kezdőlap', link: '/', icon: 'home' },
    { text: this.linkTitles[0], link: '/cat01' },
    { text: this.linkTitles[1], link: '/cat02' },
    { text: this.linkTitles[2], link: '/admin' },
  ];

  constructor(private categoryService: CategoryService) { }
}
