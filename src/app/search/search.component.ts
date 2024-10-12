import { Component } from '@angular/core'
import { MusicService } from '../services/music.service'

@Component({
  selector: 'ns-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  searchResults: any[] = []

  constructor(private musicService: MusicService) {}

  onSearch(event: any) {
    const searchTerm = event.object.text
    // Implement search logic here, integrating with music APIs
    // Update searchResults with the API response

    // For demonstration, let's assume we can determine the genre from the search term
    // In a real app, you'd get this information from the API response
    const genre = this.determineGenre(searchTerm)
    this.musicService.updateLastSearchedGenre(genre)
  }

  private determineGenre(searchTerm: string): string {
    // This is a simplified example. In a real app, you'd use more sophisticated logic or API data
    const genres = ['pop', 'rock', 'jazz', 'classical', 'hip-hop', 'electronic']
    return genres[Math.floor(Math.random() * genres.length)]
  }
}