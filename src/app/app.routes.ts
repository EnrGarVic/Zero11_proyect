import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CartaComponent } from './pages/carta/carta.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LocalesComponent } from './pages/locales/locales.component';
import { CuentaComponent } from './pages/cuenta/cuenta.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'carta', component: CartaComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'locales', component: LocalesComponent },
  { path: 'cuenta', component: CuentaComponent },
  { path: '', component: InicioComponent },
  { path: '**', redirectTo: '/carta' },
];
