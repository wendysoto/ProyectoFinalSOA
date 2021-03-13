import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteComponent } from './demo/restaurante/restaurante.component';

const routes: Routes = [
  { path: 'restaurantes', component: RestauranteComponent },
  { path: '', redirectTo: '/', pathMatch: 'prefix' },
  { path: '**', redirectTo: '/', pathMatch: 'prefix' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
