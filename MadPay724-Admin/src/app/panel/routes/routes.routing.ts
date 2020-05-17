import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from '../panel.component';

export const panelRoute: Routes = [
  {path: 'panel', component: PanelComponent},
  {path: '', redirectTo:'/panel', pathMatch: 'full'},
];

//export const RoutesRoutes = RouterModule.forChild(adminRoutes);
