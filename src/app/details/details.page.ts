import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  standalone: false,
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  pokemon: any = null;
  pokemonType: string = 'Desconocido';
  pokemonWeight: string = 'Desconocido';
  pokemonHeight: string = 'Desconocido';

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pokemonService.getPokemon(id).subscribe({
        next: (data) => {
          this.pokemon = data;
          this.processPokemonData(); // Llamamos a la función para evitar cálculos en el HTML
        },
        error: () => (this.pokemon = null),
      });
    }
  }

  processPokemonData() {
    if (!this.pokemon) return;

    this.pokemonType = this.pokemon.types?.length
      ? this.pokemon.types.map((t: any) => t.type.name).join(', ')
      : 'Desconocido';

    this.pokemonWeight =
      this.pokemon.weight != null
        ? `${this.pokemon.weight / 10} kg`
        : 'Desconocido';

    this.pokemonHeight =
      this.pokemon.height != null
        ? `${this.pokemon.height / 10} m`
        : 'Desconocido';
  }
}
