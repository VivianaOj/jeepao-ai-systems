import { Component } from '@angular/core';

interface Reason {
  title: string;
  description: string;
}

@Component({
  selector: 'app-why-us',
  standalone: true,
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss'
})
export class WhyUsComponent {
  readonly reasons: Reason[] = [
    { title: 'Equipo multidisciplinario', description: 'IA, arquitectura y QA en un mismo lugar.' },
    { title: 'Enfoque en calidad desde el día uno', description: 'No solo construimos, probamos y garantizamos.' },
    { title: 'Soluciones a la medida', description: 'No aplicamos plantillas genéricas, entendemos tu negocio.' },
    {
      title: 'Cercanía real',
      description:
        'Al ser un equipo compacto, tienes contacto directo con quienes ejecutan el proyecto, sin intermediarios.'
    },
    { title: 'Visión integral', description: 'Combinamos estrategia, tecnología y ejecución.' }
  ];
}
