import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.router';
import { RouterModule } from '@angular/router';
// modules 

//components
import { HeroService } from './hero.service';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component'
import { HeroDetailsComponent } from './hero-details.component'
import { DashboardComponent } from './dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroDetailsComponent,
    HeroesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
