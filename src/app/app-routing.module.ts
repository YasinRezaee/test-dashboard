import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PasswordGeneratorComponent } from './Components/password-generator/password-generator.component';
import { CardsComponent } from './Components/cards/cards.component';
import { TypingComponent } from './Components/typing/typing.component';




export const routes: Routes = [
  { path: 'home', component: HomeComponent, },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'passwprd-generator', component: PasswordGeneratorComponent},
  { path: 'cards', component: CardsComponent},
  { path: 'typing', component: TypingComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
