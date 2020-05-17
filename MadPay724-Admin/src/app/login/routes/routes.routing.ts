import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login.component';
import { RegisterComponent } from '../Register/Register.component';

export const loginRoute: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

//export const RoutesRoutes = RouterModule.forChild(adminRoutes);
