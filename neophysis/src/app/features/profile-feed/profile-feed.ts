/** @autor LaMendez */

import { Component, signal } from '@angular/core';

type Tab = 'publicaciones' | 'comentadas' | 'guardado';

@Component({
  selector: 'app-profile-feed',
  standalone: true,
  templateUrl: './profile-feed.html',
  styleUrl: './profile-feed.scss',
})
export class ProfileFeedComponent {
  protected readonly activeTab = signal<Tab>('publicaciones');

  readonly topics = ['Genética Aplicada', 'Microbiología', 'CRISPR-Cas9', 'Ética Científica', 'Bioinformática'];

  setTab(tab: Tab): void { this.activeTab.set(tab); }
}
