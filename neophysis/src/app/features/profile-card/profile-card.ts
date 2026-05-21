/** @autor LaMendez */

import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss',
})
export class ProfileCardComponent {
  protected readonly editMode = signal(false);

  protected readonly user = signal({
    name: 'Dr. Científico',
    title: 'Experto en tecnología molecular',
    bio: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ante dictumst at, augue venenatis habitasse convallis ut sagittis inceptos eget a sollicitudin, arcu etiam',
    publications: 0,
    comments: '2',
    location: 'Ubicación',
    joinDate: 'Mayo 2026',
    website: 'drCientifico-lab.io',
    avatarSrc: '/Logo2.png',
  });

  protected readonly profileForm;

  protected readonly isValid = computed(() => this.profileForm.valid);

  constructor(private readonly fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: [this.user().name, Validators.required],
      title: [this.user().title],
      bio: [this.user().bio, Validators.required],
      location: [this.user().location],
      website: [this.user().website],
    });
  }

  protected toggleEdit(): void {
    if (!this.editMode()) {
      this.profileForm.patchValue(this.user());
    }
    this.editMode.set(!this.editMode());
  }

  protected saveProfile(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    const updatedProfile = this.profileForm.value as {
      name: string;
      title: string;
      bio: string;
      location: string;
      website: string;
    };

    this.user.set({ ...this.user(), ...updatedProfile });
    this.editMode.set(false);
  }
}
