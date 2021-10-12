import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnagramComponent } from './anagram/anagram.component';
import { RegisterComponent } from './register/register.component';
import { TempTrackerComponent } from './temp-tracker/temp-tracker.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'anagram', component: AnagramComponent},
  {path: 'temp-tracker', component: TempTrackerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
