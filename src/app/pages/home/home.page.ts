import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pokemonList: any[] = [];
  filteredPokemonList: any[] = [];
  searchTerm: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe((data: any) => {
      this.pokemonList = data.results;
      this.filteredPokemonList = this.pokemonList;
    });
  }

  filterPokemon() {
    this.filteredPokemonList = this.pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
