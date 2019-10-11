import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DownloaderComponent } from './components/downloader/downloader.component';
import { MipapiComponent } from './components/mipapi/mipapi.component';

const routes: Routes = [
 {path: '',component: DashboardComponent},
 {path: 'manage',component: ManageComponent},
 {path: 'download', component: DownloaderComponent},
 {path: 'api', component: MipapiComponent},
 { path: '**', component: PageNotFoundComponent}
];

export const AppRoutes = RouterModule.forRoot(routes);