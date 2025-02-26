import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  standalone: false,
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  constructor(private router: Router) {}
  @Input() pokemon!: any;
  @Input() pokemonId!: string;
  navigateToDetails() {
    this.router.navigate(['/details']);
  }
}
