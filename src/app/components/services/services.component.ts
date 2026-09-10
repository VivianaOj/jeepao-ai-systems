import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  readonly services: ServiceItem[] = [
    {
      title: 'Consultoría e Implementación de Inteligencia Artificial',
      description:
        'Analizamos tus procesos y te ayudamos a identificar dónde la IA puede generar mayor impacto: automatización de tareas, análisis de datos, chatbots inteligentes, predicción y optimización de procesos.',
      icon: 'brain'
    },
    {
      title: 'Desarrollo de Soluciones con IA a la Medida',
      description:
        'Creamos asistentes virtuales, modelos de análisis de datos, sistemas de recomendación y herramientas personalizadas que se adaptan a tu operación específica.',
      icon: 'robot'
    },
    {
      title: 'Automatización de Procesos (RPA & Workflows Inteligentes)',
      description:
        'Optimizamos tareas repetitivas y flujos de trabajo mediante automatización, reduciendo tiempos, errores y costos operativos.',
      icon: 'gear'
    },
    {
      title: 'Arquitectura de Software y de Sistemas',
      description:
        'Diseñamos arquitecturas robustas, escalables y seguras para soportar tus soluciones digitales, ya sea que estés construyendo desde cero o modernizando sistemas existentes.',
      icon: 'layers'
    },
    {
      title: 'Aseguramiento de Calidad (QA) y Testing',
      description:
        'Aplicamos procesos de control de calidad y pruebas (manuales y automatizadas) para garantizar que cada solución funcione de forma confiable antes de llegar a producción.',
      icon: 'shield'
    },
    {
      title: 'Integración de IA en Procesos de QA y Automatización',
      description:
        'Combinamos inteligencia artificial con testing y automatización para acelerar los ciclos de prueba y detectar errores de forma más inteligente y eficiente.',
      icon: 'refresh'
    },
    {
      title: 'Consultoría Tecnológica General',
      description:
        'Acompañamos a empresas y emprendedores en la definición de su estrategia tecnológica, eligiendo las herramientas y arquitecturas correctas para escalar.',
      icon: 'bulb'
    }
  ];
}
