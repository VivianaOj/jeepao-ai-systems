import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

  // ── Envío real de correos con Web3Forms (gratis, sin backend) ──────────────
  // 1) Entra a https://web3forms.com y escribe el correo donde quieres recibir
  //    los mensajes del formulario.
  // 2) Copia la "Access Key" que te llegará a ese correo.
  // 3) Pégala aquí abajo (la clave es pública, está hecha para el código del sitio).
  private readonly web3formsAccessKey = '';

  private readonly web3formsEndpoint = 'https://api.web3forms.com/submit';

  status: 'idle' | 'sending' | 'success' | 'error' = 'idle';

  readonly form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    company: [''],
    interest: ['IA', Validators.required],
    message: ['', Validators.required]
  });

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (!this.web3formsAccessKey) {
      console.warn('[Contacto] Falta configurar la Access Key de Web3Forms (ver contact.component.ts).');
      this.status = 'error';
      return;
    }

    this.status = 'sending';

    const { name, email, company, interest, message } = this.form.getRawValue();

    try {
      const response = await fetch(this.web3formsEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: this.web3formsAccessKey,
          subject: `Nuevo mensaje del sitio web — ${name}`,
          from_name: 'Jeepao AI Systems — Web',
          name,
          email,
          company: company || 'No indicada',
          interest,
          message
        })
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        this.status = 'success';
        this.form.reset({ interest: 'IA' });
      } else {
        this.status = 'error';
        console.error('[Contacto] Error de Web3Forms:', result?.message ?? response.status);
      }
    } catch (error) {
      this.status = 'error';
      console.error('[Contacto] Error de red al enviar el formulario:', error);
    }
  }
}
