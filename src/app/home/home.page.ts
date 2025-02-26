import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pokemon: any = null;
  searchTerm: string = '';
  allPokemon: any[] = [];
  filteredPokemon: any[] = [];
  errorMessage: string = '';
  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit() {
    console.log('🔥 HomePage cargado');
    this.pokemonService.getAllPokemon().subscribe({
      next: (data) => {
        this.allPokemon = data.results;
        this.filteredPokemon = this.allPokemon;
      },
      error: (error) => console.error('Error cargando Pokémon', error),
    });
  }

  getPokemonId(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }

  searchPokemon(term: string) {
    console.log('Buscando en HomePage:', term);
    this.filteredPokemon = this.allPokemon.filter((poke) =>
      poke.name.toLowerCase().includes(term.toLowerCase())
    );
  }

  viewDetails(id: string) {
    this.router.navigate(['/details', id]);
  }
}
