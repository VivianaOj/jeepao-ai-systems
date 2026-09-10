import { Component, Input } from '@angular/core';

// Isotipo "J" constelación: nodo de red con forma de J, cian arriba fundiéndose a violeta abajo.
@Component({
  selector: 'app-logo',
  standalone: true,
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size * 1.3"
      viewBox="0 0 100 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="55" y1="8" x2="45" y2="128" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#64FFDA" />
          <stop offset="0.55" stop-color="#38BDF8" />
          <stop offset="1" stop-color="#7928CA" />
        </linearGradient>
        <filter id="logoGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g stroke="url(#logoGradient)" stroke-width="2.2" filter="url(#logoGlow)">
        <line x1="55" y1="8" x2="35" y2="30" />
        <line x1="55" y1="8" x2="75" y2="30" />
        <line x1="35" y1="30" x2="75" y2="30" />
        <line x1="35" y1="30" x2="55" y2="50" />
        <line x1="75" y1="30" x2="55" y2="50" />
        <line x1="55" y1="50" x2="58" y2="78" />
        <line x1="58" y1="78" x2="62" y2="100" />
        <line x1="62" y1="100" x2="42" y2="108" />
        <line x1="62" y1="100" x2="22" y2="122" />
        <line x1="62" y1="100" x2="48" y2="128" />
        <line x1="42" y1="108" x2="22" y2="122" />
        <line x1="42" y1="108" x2="48" y2="128" />
        <line x1="22" y1="122" x2="48" y2="128" />
      </g>

      <g filter="url(#logoGlow)">
        <circle cx="55" cy="8" r="4.5" fill="url(#logoGradient)" />
        <circle cx="35" cy="30" r="4" fill="url(#logoGradient)" />
        <circle cx="75" cy="30" r="4" fill="url(#logoGradient)" />
        <circle cx="55" cy="50" r="4" fill="url(#logoGradient)" />
        <circle cx="58" cy="78" r="3.5" fill="url(#logoGradient)" />
        <circle cx="62" cy="100" r="4" fill="url(#logoGradient)" />
        <circle cx="42" cy="108" r="3.5" fill="url(#logoGradient)" />
        <circle cx="48" cy="128" r="3.5" fill="url(#logoGradient)" />
        <circle cx="22" cy="122" r="5" fill="#64FFDA" />
      </g>
    </svg>
  `
})
export class LogoComponent {
  @Input() size = 40;
}
