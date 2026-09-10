import { Component, Input } from '@angular/core';

// Set minimalista de íconos de línea (sin dependencias externas) para servicios, productos e industrias.
@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      @switch (name) {
        @case ('brain') {
          <path d="M9 3a3 3 0 0 0-3 3v.5A2.5 2.5 0 0 0 4 9v1a2.5 2.5 0 0 0 1 2 2.5 2.5 0 0 0-1 2v1a2.5 2.5 0 0 0 2.5 2.5H7a3 3 0 0 0 3 3" />
          <path d="M15 3a3 3 0 0 1 3 3v.5A2.5 2.5 0 0 1 20 9v1a2.5 2.5 0 0 1-1 2 2.5 2.5 0 0 1 1 2v1a2.5 2.5 0 0 1-2.5 2.5H17a3 3 0 0 1-3 3" />
          <path d="M9 3v18M15 3v18" />
        }
        @case ('robot') {
          <rect x="4" y="8" width="16" height="12" rx="2" />
          <path d="M12 8V4M9 4h6" />
          <circle cx="9" cy="14" r="1" />
          <circle cx="15" cy="14" r="1" />
          <path d="M2 12h2M20 12h2" />
        }
        @case ('gear') {
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.6 1z" />
        }
        @case ('layers') {
          <path d="m12 3 9 5-9 5-9-5 9-5Z" />
          <path d="m3 13 9 5 9-5" />
        }
        @case ('shield') {
          <path d="M12 3 4 6v6c0 4.5 3 7.5 8 9 5-1.5 8-4.5 8-9V6z" />
          <path d="m9 12 2 2 4-4" />
        }
        @case ('refresh') {
          <path d="M21 12a9 9 0 1 1-3-6.7" />
          <path d="M21 3v6h-6" />
        }
        @case ('bulb') {
          <path d="M9 18h6M10 22h4" />
          <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0 0 12 2Z" />
        }
        @case ('leaf') {
          <path d="M5 21c0-7 4-14 15-16 1 10-5 16-15 16Z" />
          <path d="M5 21c3-5 6-8 11-12" />
        }
      }
    </svg>
  `
})
export class IconComponent {
  @Input() name = 'brain';
}
