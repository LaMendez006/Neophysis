/** @autor LaMendez */
import { Component } from '@angular/core';

@Component({ selector: 'app-forum-trending', standalone: true, templateUrl: './forum-trending.html', styleUrl: './forum-trending.scss' })
export class ForumTrendingComponent {
  readonly tags = ['#Mitigación', '#Bioinformática', '#Tecnología Farmacéutica', '#BioÉtica', '#Genética', '#Automatización'];
  readonly stats = [
    { label: 'Total Miembros', value: '12.4k' },
    { label: 'Posts Totales',  value: '22.6k' },
    { label: 'Posts Diarios',  value: '1.1k'  },
    { label: 'Personas que comentan', value: '88%' },
  ];
}
