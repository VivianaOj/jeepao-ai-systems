import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

interface Product {
  name: string;
  description: string;
  audience: string;
  benefits: string[];
  status: string;
  statusClass: 'available' | 'development' | 'soon';
  icon: string;
  link?: string;
  linkLabel?: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  readonly products: Product[] = [
    {
      name: 'AgroIA',
      description:
        'Plataforma de análisis de suelos con IA: registre su finca, aporte sus datos (laboratorio, archivo o sensor) y reciba un diagnóstico agronómico completo — qué sembrar, qué le falta y dónde abonar.',
      audience: 'Agricultores, agrónomos y extensionistas que buscan decisiones de siembra y fertilización basadas en datos.',
      benefits: [
        'Registro de finca: ubicación y cultivo actual o planeado',
        'Datos por laboratorio, archivo o sensor IoT — usted elige',
        'Diagnóstico con IA y reporte agronómico completo',
        'Funciona sin sensores · Funciona offline'
      ],
      status: 'Disponible',
      statusClass: 'available',
      icon: 'leaf',
      link: 'https://agroia-backend.onrender.com/',
      linkLabel: 'Analizar mi suelo 🧪'
    },
    {
      name: 'Asistente de Automatización Inteligente',
      description:
        'Un asistente configurable que automatiza tareas repetitivas combinando reglas de negocio e IA.',
      audience: 'Pymes y equipos operativos que buscan reducir tareas manuales.',
      benefits: ['Flujos de trabajo personalizables', 'Reducción de errores humanos', 'Ahorro de tiempo operativo'],
      status: 'Próximamente',
      statusClass: 'soon',
      icon: 'gear'
    }
  ];
}
