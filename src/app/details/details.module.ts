import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPage } from './details.page';
import { PokemonDetailComponent } from 'src/app/components/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [DetailsPage, PokemonDetailComponent],
})
export class DetailsPageModule {}
