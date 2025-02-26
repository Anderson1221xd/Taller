import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100';

  constructor(private http: HttpClient) {}

  getAllPokemon() {
    return this.http.get<any>(`${environment.apiUrl}pokemon?limit=151`);
  }
  getPokemon(id: string): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
