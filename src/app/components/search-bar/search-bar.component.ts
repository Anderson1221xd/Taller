import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  searchTerm: string = '';
  @Output() searchEvent = new EventEmitter<string>();

  constructor() {
    console.log('🔍 SearchBarComponent cargado');
  }

  onSearch(event: any) {
    const searchTerm = event.target.value;
    console.log('Término de búsqueda:', searchTerm);
  }
}
