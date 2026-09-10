import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ProductsComponent } from './components/products/products.component';
import { TeamComponent } from './components/team/team.component';
import { MethodologyComponent } from './components/methodology/methodology.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    ProductsComponent,
    TeamComponent,
    MethodologyComponent,
    WhyUsComponent,
    IndustriesComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
