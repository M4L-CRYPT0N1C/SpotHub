import { Component, OnInit } from '@angular/core'
import { MusicService } from '../services/music.service'

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  recentlyPlayed: any[] = []
  topMixes: any[] = []
  personalizedPlaylists: any[] = []

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.loadSuggestions()

    // Subscribe to search updates
    this.musicService.lastSearchedGenre$.subscribe(() => {
      this.loadSuggestions()
    })
  }

  loadSuggestions() {
    this.recentlyPlayed = this.musicService.getRecentlyPlayed()
    this.topMixes = this.musicService.getTopMixes()
    this.personalizedPlaylists = this.musicService.getPersonalizedPlaylists()
  }
}