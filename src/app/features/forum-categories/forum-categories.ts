/** @autor LaMendez */
import { Component, EventEmitter, Output, signal } from '@angular/core';

interface Category { icon: string; label: string; description: string; count: string; dark: boolean; }

@Component({ selector: 'app-forum-categories', standalone: true, templateUrl: './forum-categories.html', styleUrl: './forum-categories.scss' })
export class ForumCategoriesComponent {
  @Output() categorySelected = new EventEmitter<string>();
  protected readonly selectedCategory = signal('');

  readonly categories: Category[] = [
    { icon: 'genetics', label: 'Biotecnología', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ante dictumst at, augue venenatis habitasse convallis ut sagittis inceptos eget a sollicitudin, arcu etiam', count: '1.2k Publicaciones', dark: false },
    { icon: 'magnification_small', label: 'Investigación', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ante dictumst at, augue venenatis habitasse convallis ut sagittis inceptos eget a sollicitudin, arcu etiam', count: '840 Publicaciones', dark: true },
    { icon: 'lightbulb', label: 'Innovación', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ante dictumst at, augue venenatis habitasse convallis ut sagittis inceptos eget a sollicitudin, arcu etiam', count: '2.4k Publicaciones', dark: false },
  ];

  protected selectCategory(label: string): void {
    const nextValue = this.selectedCategory() === label ? '' : label;
    this.selectedCategory.set(nextValue);
    this.categorySelected.emit(nextValue);
  }
}

