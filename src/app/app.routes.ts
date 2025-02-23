import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ConfigComponent } from './features/config/config.component';
import { ChartsComponent } from './features/charts/charts.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

    // children: [
    //   {
    //     path: 'config',
    //     component: ConfigComponent,
    //   },
    // ],
  },
  {
    path: 'charts',
    component: ChartsComponent,
  },
  {
    path: 'config',
    component: ConfigComponent,
  },
];
