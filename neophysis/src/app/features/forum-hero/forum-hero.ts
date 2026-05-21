/** @autor LaMendez */
import { Component, EventEmitter, Output } from '@angular/core';
@Component({ selector: 'app-forum-hero', standalone: true, templateUrl: './forum-hero.html', styleUrl: './forum-hero.scss' })
export class ForumHeroComponent {
  @Output() exploreCategories = new EventEmitter<void>();
}
