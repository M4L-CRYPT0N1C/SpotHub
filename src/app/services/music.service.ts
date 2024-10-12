import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private lastSearchedGenre = new BehaviorSubject<string>('')
  lastSearchedGenre$ = this.lastSearchedGenre.asObservable()

  private recentlyPlayed: any[] = []
  private topMixes: any[] = []
  private personalizedPlaylists: any[] = []

  constructor() {
    // Initialize with some default data
    this.updateSuggestions('pop')
  }

  updateLastSearchedGenre(genre: string) {
    this.lastSearchedGenre.next(genre)
    this.updateSuggestions(genre)
  }

  private updateSuggestions(genre: string) {
    // In a real app, you would fetch this data from an API
    // Here we're just simulating the behavior
    this.recentlyPlayed = [
      { title: `${genre.charAt(0).toUpperCase() + genre.slice(1)} Hit 1`, artist: 'Artist 1', imageUrl: 'https://example.com/image1.jpg' },
      { title: `${genre.charAt(0).toUpperCase() + genre.slice(1)} Hit 2`, artist: 'Artist 2', imageUrl: 'https://example.com/image2.jpg' },
      { title: `${genre.charAt(0).toUpperCase() + genre.slice(1)} Hit 3`, artist: 'Artist 3', imageUrl: 'https://example.com/image3.jpg' },
    ]

    this.topMixes = [
      { title: `${genre.charAt(0).toUpperCase() + genre.slice(1)} Mix`, description: 'Top tracks in this genre', imageUrl: 'https://example.com/mix1.jpg' },
      { title: 'Discover Weekly', description: 'Your weekly mixtape of fresh music', imageUrl: 'https://example.com/mix2.jpg' },
      { title: 'Release Radar', description: 'Catch all the latest music from artists you follow', imageUrl: 'https://example.com/mix3.jpg' },
    ]

    this.personalizedPlaylists = [
      { title: `${genre.charAt(0).toUpperCase() + genre.slice(1)} for You`, description: 'Personalized playlist based on your listening', imageUrl: 'https://example.com/playlist1.jpg' },
      { title: 'Your Time Capsule', description: 'Songs to take you back in time', imageUrl: 'https://example.com/playlist2.jpg' },
      { title: 'On Repeat', description: 'Songs you can\'t stop listening to', imageUrl: 'https://example.com/playlist3.jpg' },
    ]
  }

  getRecentlyPlayed(): any[] {
    return this.recentlyPlayed
  }

  getTopMixes(): any[] {
    return this.topMixes
  }

  getPersonalizedPlaylists(): any[] {
    return this.personalizedPlaylists
  }
}