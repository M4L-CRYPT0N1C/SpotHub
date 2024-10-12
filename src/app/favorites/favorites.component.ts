import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ns-favorites',
  templateUrl: './favorites.component.html',
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = []

  ngOnInit() {
    // Load favorites from local storage or a service
  }

  removeFromFavorites(item: any) {
    // Implement logic to remove item from favorites
  }
}