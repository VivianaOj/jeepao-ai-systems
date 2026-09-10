import { Component } from '@angular/core';

interface MethodologyStep {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-methodology',
  standalone: true,
  templateUrl: './methodology.component.html',
  styleUrl: './methodology.component.scss'
})
export class MethodologyComponent {
  readonly steps: MethodologyStep[] = [
    { number: '01', title: 'Descubrimiento', description: 'Escuchamos tu problema, objetivos y contexto del negocio.' },
    {
      number: '02',
      title: 'Análisis y propuesta',
      description: 'Diseñamos una solución técnica adaptada, con arquitectura clara y alcance definido.'
    },
    {
      number: '03',
      title: 'Desarrollo',
      description: 'Construimos la solución aplicando buenas prácticas de arquitectura, IA y automatización.'
    },
    {
      number: '04',
      title: 'Aseguramiento de calidad (QA)',
      description: 'Probamos exhaustivamente antes de entregar, combinando testing manual y automatizado.'
    },
    {
      number: '05',
      title: 'Entrega y acompañamiento',
      description: 'Implementamos y te acompañamos en la adopción, con soporte post-entrega.'
    }
  ];
}
