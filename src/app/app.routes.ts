import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CartaComponent } from './pages/carta/carta.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LocalesComponent } from './pages/locales/locales.component';
import { CuentaComponent } from './pages/cuenta/cuenta.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { AdminEventosComponent } from './pages/admin-eventos/admin-eventos.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'admin', component: AdminLoginComponent },
  { path: 'admin/panel', component: AdminPanelComponent, canActivate: [authGuard] },
  { path: 'admin/eventos', component: AdminEventosComponent, canActivate: [authGuard] },
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
