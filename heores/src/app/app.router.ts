import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailsComponent } from './hero-details.component'
export const appRoutes: Routes = [
	{path: 'heroes', component: HeroesComponent },
	{path: 'dashboard', component: DashboardComponent},
	{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
	{path: 'detail/:id', component: HeroDetailsComponent}
]

