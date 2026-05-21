/** @autor LaMendez */
import { Component } from '@angular/core';
import { SidebarNavComponent } from '../../layout/sidebar-nav/sidebar-nav';
import { NeoHeaderComponent } from '../../layout/neo-header/neo-header';
import { FooterComponent } from '../../layout/footer/footer';
import { ForumHeroComponent } from '../../features/forum-hero/forum-hero';
import { ForumCategoriesComponent } from '../../features/forum-categories/forum-categories';
import { ForumPostsComponent } from '../../features/forum-posts/forum-posts';
import { ForumTrendingComponent } from '../../features/forum-trending/forum-trending';

@Component({ selector: 'app-forum-page', standalone: true, imports: [SidebarNavComponent, NeoHeaderComponent, FooterComponent, ForumHeroComponent, ForumCategoriesComponent, ForumPostsComponent, ForumTrendingComponent], templateUrl: './forum-page.html', styleUrl: './forum-page.scss' })
export class ForumPage {}
