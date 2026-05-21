/** @autor LaMendez */

import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss',
})
export class ProfileCardComponent {
  readonly user = {
    name: 'Dr. Científico',
    title: 'Experto en tecnología molecular',
    bio: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ante dictumst at, augue venenatis habitasse convallis ut sagittis inceptos eget a sollicitudin, arcu etiam',
    publications: 0,
    comments: '2.8k',
    location: 'Ubicación',
    joinDate: 'Mayo 2026',
    website: 'drCientifico-lab.io',
    avatarSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYvBysmvL3xxHTGhpdLa2E2S8T8Vwu-McxSdDJDPvCg0BQCMymnCBW8ayC_zHeY2NVqYeIXYC6TnXyRm_2P3hLLC0njMwkZkCMJOwalO34bgjYmDK0PoPCeMqMiP-mx6Eu2re68DeW_wVZiumVGW-Wg2koB7mYZU0KvWxN54QqRNYUGL8pYhky5xxH8ol_n38d9kJuqjFWsruYcDktYHpEnDbQ7F6CHExOSogWRPevgYvd6p41fgnnIqQDk_TyLPYeYS0URdjmLUaa',
  };
}
