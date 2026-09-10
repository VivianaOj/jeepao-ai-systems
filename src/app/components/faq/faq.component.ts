import { Component, signal } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  readonly items: FaqItem[] = [
    {
      question: '¿Qué tipo de empresas pueden trabajar con ustedes?',
      answer:
        'Trabajamos con empresas de cualquier tamaño e industria interesadas en incorporar Inteligencia Artificial, automatización o mejorar su arquitectura tecnológica y calidad de software.'
    },
    {
      question: '¿Necesito tener conocimientos técnicos para trabajar con Jeepao AI Systems?',
      answer: 'No. Nosotros nos encargamos de la parte técnica; tú solo necesitas contarnos tu objetivo de negocio.'
    },
    {
      question: '¿Cuánto tiempo toma un proyecto?',
      answer: 'Depende del alcance. Tras la reunión de descubrimiento, te entregamos un cronograma claro y realista.'
    },
    {
      question: '¿Ofrecen soporte después de la entrega?',
      answer: 'Sí, ofrecemos acompañamiento y soporte post-implementación según lo acordado con cada cliente.'
    },
    {
      question: '¿Cómo empiezo a trabajar con ustedes?',
      answer:
        'Simplemente agenda una llamada o escríbenos por el formulario de contacto y coordinaremos una primera reunión sin compromiso.'
    }
  ];

  readonly openIndex = signal<number | null>(null);

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
