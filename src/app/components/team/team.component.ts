import { Component } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  photo: string;
  linkedin: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  readonly failedPhotos = new Set<string>();

  onImageError(member: TeamMember): void {
    this.failedPhotos.add(member.name);
  }

  // Las fotos viven en public/team/ y se sirven como assets locales del sitio
  // (evita el hotlinking a LinkedIn y que las URLs firmadas expiren).
  readonly team: TeamMember[] = [
    {
      name: 'Erick Duván Soto Díaz',
      role: 'Lead Cloud Architect · Enterprise AI Architect',
      bio: 'Arquitecto líder en la nube y experto en microservicios (Azure, AWS, OCI), con enfoque en sistemas bancarios digitales escalables y arquitecturas de IA empresarial (MCP, AI Development Kits).',
      initials: 'ES',
      photo: 'team/erick-soto.jpg',
      linkedin: 'https://www.linkedin.com/in/erick-duvan-soto-diaz/'
    },
    {
      name: 'César Uriel Ochoa Castro',
      role: 'QA Automation Team Leader en Bizagi',
      bio: 'Lidera equipos de automatización de pruebas en Bizagi, con amplia experiencia en aseguramiento de calidad e integración de inteligencia artificial en procesos de testing.',
      initials: 'CO',
      photo: 'team/cesar-ochoa.jpg',
      linkedin: 'https://www.linkedin.com/in/cesar-uriel-ochoa-castro/'
    },
    {
      name: 'Viviana Jiménez',
      role: 'Cloud Architect · AI Engineer',
      bio: 'Ingeniera de software senior especializada en IA generativa, agentes de IA, RAG y arquitecturas cloud con .NET, Azure, AWS, Python y Angular.',
      initials: 'VJ',
      photo: 'team/viviana-jimenez.jpg',
      linkedin: 'https://www.linkedin.com/in/viviana-jimenez/'
    }
  ];
}
