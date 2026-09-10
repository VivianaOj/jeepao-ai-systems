import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

interface Industry {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss'
})
export class IndustriesComponent {
  readonly industries: Industry[] = [
    {
      title: 'Pymes y emprendimientos',
      description: 'Que buscan automatizar procesos y reducir costos operativos.',
      icon: 'bulb'
    },
    {
      title: 'Empresas de tecnología',
      description: 'Que necesitan reforzar su arquitectura o su proceso de QA.',
      icon: 'layers'
    },
    {
      title: 'Negocios en digitalización',
      description:
        'Que buscan incorporar IA en su operación diaria (atención al cliente, análisis de datos, procesos internos).',
      icon: 'robot'
    },
    {
      title: 'Startups',
      description: 'Que necesitan construir su producto desde una base sólida y escalable.',
      icon: 'gear'
    }
  ];
}
