import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { PokemonCardComponent } from '../components/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [SearchBarComponent, PokemonCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [SearchBarComponent, PokemonCardComponent],
})
export class SharedModule {}
