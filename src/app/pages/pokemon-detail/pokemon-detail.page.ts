import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { NavController } from '@ionic/angular';
@Component({
  standalone: false,
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {
  pokemon: any;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}
  goBack() {
    this.navCtrl.back();
  }
  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.pokemonService.getPokemonDetails(name).subscribe((response) => {
        this.pokemon = response;
      });
    }
  }
}
