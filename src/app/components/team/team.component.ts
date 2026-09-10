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

  readonly team: TeamMember[] = [
    {
      name: 'Viviana Jiménez',
      role: 'Cloud Architect · AI Engineer',
      bio: 'Ingeniera de software senior especializada en IA generativa, agentes de IA, RAG y arquitecturas cloud con .NET, Azure, AWS, Python y Angular.',
      initials: 'VJ',
      photo:
        'https://media.licdn.com/dms/image/v2/D5603AQEIFNUr3nLNyg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1697085851194?e=1790812800&v=beta&t=XlrMCurIcGcyzA3F6SF-D6rc7C3xuMU8pr1xvyChg7A',
      linkedin: 'https://www.linkedin.com/in/viviana-jimenez/'
    },
    {
      name: 'Erick Duván Soto Díaz',
      role: 'Lead Cloud Architect · Enterprise AI Architect',
      bio: 'Arquitecto líder en la nube y experto en microservicios (Azure, AWS, OCI), con enfoque en sistemas bancarios digitales escalables y arquitecturas de IA empresarial (MCP, AI Development Kits).',
      initials: 'ES',
      photo:
        'https://media.licdn.com/dms/image/v2/D4E03AQHBD62ttryTiw/profile-displayphoto-scale_100_100/B4EZzj4C8THgAc-/0/1773349646769?e=1790812800&v=beta&t=mANziBzXMrhYN46SivehwHJKd2TZtoZOe_J8TEjvo3Y',
      linkedin: 'https://www.linkedin.com/in/erick-duvan-soto-diaz/'
    },
    {
      name: 'César Uriel Ochoa Castro',
      role: 'QA Automation Team Leader en Bizagi',
      bio: 'Lidera equipos de automatización de pruebas en Bizagi, con amplia experiencia en aseguramiento de calidad e integración de inteligencia artificial en procesos de testing.',
      initials: 'CO',
      photo:
        'https://media.licdn.com/dms/image/v2/C5603AQFT0GBEUM1Jkg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1622672764452?e=1790812800&v=beta&t=PaCuLk_FCuFu12G0TERlGRhwKPMYUBiMGFJrctgxARI',
      linkedin: 'https://www.linkedin.com/in/cesar-uriel-ochoa-castro/'
    }
  ];
}
