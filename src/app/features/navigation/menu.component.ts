import { Component, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from '../../shared/icons/view/view.component';
import { ConfigComponent } from '../../shared/icons/config/config.component';
import { ChartComponent } from '../../shared/icons/chart/chart.component';
import { GlobeComponent } from '../../shared/icons/globe/globe.component';
import { RouterLink } from '@angular/router';

interface MenuItem<T = Component> {
  label: string;
  link?: string;
  icon: Type<T>;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ViewComponent,
    ConfigComponent,
    ChartComponent,
    GlobeComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Config',
      link: '/',
      icon: ConfigComponent,
    },
    {
      label: 'View',
      link: '/',
      icon: ViewComponent,
    },

    {
      label: 'Chart',
      link: '/charts',
      icon: ChartComponent,
    },
    {
      label: 'Globe',
      icon: GlobeComponent,
    },
  ];
}
