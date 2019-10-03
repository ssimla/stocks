import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
 {path: '',component: DashboardComponent},
 {path: 'manage',component: ManageComponent},
 { path: '**', component: PageNotFoundComponent }
];

export const AppRoutes = RouterModule.forRoot(routes);