/** @autor LaMendez */

import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

type Tab = 'publicaciones' | 'comentadas' | 'guardado';

interface SavedPost {
  id: number;
  title: string;
  category: string;
  time: string;
  author: string;
}

@Component({
  selector: 'app-profile-feed',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile-feed.html',
  styleUrl: './profile-feed.scss',
})
export class ProfileFeedComponent {
  protected readonly activeTab = signal<Tab>('publicaciones');
  protected readonly newTopic = signal('');
  protected readonly selectedTopics = signal(['Genética Aplicada', 'Microbiología', 'CRISPR-Cas9', 'Ética Científica', 'Bioinformática']);
  protected readonly savedPostStates = signal<Record<number, boolean>>({});
  protected readonly posts = signal<SavedPost[]>([
    { id: 1, title: 'La importancia de la biotecnología en la seguridad alimentaria global', category: 'Biotecnología', time: 'Hace 2 horas', author: 'La Mendez' },
    { id: 2, title: 'Metodologías emergentes en la secuenciación de nanoporos', category: 'Investigación', time: 'Hace 5 horas', author: 'La Mendez' },
    { id: 3, title: 'Estrategias de innovación para acelerar la investigación abierta', category: 'Innovación', time: 'Ayer', author: 'La Mendez' },
  ]);
  protected readonly comments = signal([
    { postTitle: 'Estrategias de innovación para acelerar la investigación abierta', text: 'Interesante propuesta, creo que puede mejorar la colaboración entre equipos multidisciplinarios.', time: 'Hace 2 horas' },
    { postTitle: 'Metodologías emergentes en la secuenciación de nanoporos', text: 'Este enfoque abre nuevas posibilidades para protocolos de laboratorio más eficientes.', time: 'Ayer' },
  ]);
  protected readonly bookmarkedPosts = computed(() => {
    const state = this.savedPostStates();
    return this.posts().filter((post) => state[post.id]);
  });

  constructor() {
    this.loadSavedPosts();
  }

  setTab(tab: Tab): void {
    this.activeTab.set(tab);
  }

  private loadSavedPosts(): void {
    const saved = localStorage.getItem('neophysis-post-states');
    if (!saved) {
      this.savedPostStates.set({});
      return;
    }

    try {
      const parsed = JSON.parse(saved) as Record<number, { bookmarked: boolean }>;
      const bookmarked = Object.fromEntries(
        Object.entries(parsed).map(([key, value]) => [Number(key), value.bookmarked])
      );
      this.savedPostStates.set(bookmarked);
    } catch {
      this.savedPostStates.set({});
    }
  }

  protected addTopic(): void {
    const topic = this.newTopic().trim();
    if (!topic || this.selectedTopics().includes(topic)) {
      this.newTopic.set('');
      return;
    }
    this.selectedTopics.update((topics) => [...topics, topic]);
    this.newTopic.set('');
  }

  protected removeTopic(topic: string): void {
    this.selectedTopics.update((topics) => topics.filter((current) => current !== topic));
  }
}
