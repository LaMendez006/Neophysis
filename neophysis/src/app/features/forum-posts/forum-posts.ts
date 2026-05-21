/** @autor LaMendez */
import { Component, signal } from '@angular/core';

type Sort = 'reciente' | 'popular';

interface Post { id: number; author: string; avatar: string; time: string; category: string; categoryDark: boolean; title: string; excerpt: string; votes: number; comments: number; }

@Component({ selector: 'app-forum-posts', standalone: true, templateUrl: './forum-posts.html', styleUrl: './forum-posts.scss' })
export class ForumPostsComponent {
  protected readonly sort = signal<Sort>('reciente');

  readonly posts: Post[] = [
    { id: 1, author: 'Dr. Julian V.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPYE6hQHS-h_dJ8aBWFTo-Jj3QTLHvayo94uCOWa3_vnFQslgHsnDTyxBRwhL-KhKB1e-1Gsj48doyEH0xYwPKkQJbuSicGiKZZoIPOqYl6GkqMT7chvJomyBuXSIS5kUoL9DNBulpu8_fAFhyrPaPfo83XmS1AaYypW7MCo4BeFmk2t_3_78BWJeVwO4PZ3Q2he1ES9lpU6rtz2uC5WnJdndXp56rkhe2ul6mBFGLRRXLmJFcNsAR5QUFMcy3b1jMlv4I8OTW1w3k', time: 'Hace 2 horas', category: 'Biotecnología', categoryDark: false, title: 'La importancia de la biotecnología en la seguridad alimentaria global', excerpt: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ante dictumst at, augue venenatis habitasse convallis ut sagittis inceptos eget a sollicitudin, arcu etiam', votes: 124, comments: 48 },
    { id: 2, author: 'Sarah Chen', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKNl16PUrswAbzeZ80af9kPB8OIgyj-gg0Hj4HOjWS3hOU8SIYw0VMUhrfkZC-v3VbBzg05vcjMUabrpjPE86WhBMjVDu4vMMpBt705O4HY1Ml6O2VAqh9R6pqHDxjdu5pl20vagG68BzhUIxhUdtr9jhJpk4Q0JHm6FT1dnmhsUyKiyKV8lQRNFyBGwcmqH_tjXngWRSqNJX9SH-CVM729F3dFg4NVDhww7eT37jgB3_0JuuhvYNatJtdoXG7uro4XgV2NnV6oZ5A', time: 'Hace 5 horas', category: 'Investigación', categoryDark: true, title: 'Metodologías emergentes en la secuenciación de nanoporos', excerpt: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ante dictumst at, augue venenatis habitasse convallis ut sagittis inceptos eget a sollicitudin, arcu etiam', votes: 89, comments: 22 },
  ];

  setSort(s: Sort): void { this.sort.set(s); }
}
