import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ns-player',
  templateUrl: './player.component.html',
})
export class PlayerComponent implements OnInit {
  currentTrack: any = {
    title: 'Sample Track',
    artist: 'Sample Artist',
    imageUrl: 'https://example.com/album-art.jpg',
  }
  isPlaying: boolean = false
  isFavorite: boolean = false
  currentTime: number = 0
  duration: number = 180 // 3 minutes in seconds

  ngOnInit() {
    // Initialize audio player and load current track
  }

  togglePlayPause() {
    this.isPlaying = !this.isPlaying
    // Implement play/pause logic
  }

  previousTrack() {
    // Implement previous track logic
  }

  nextTrack() {
    // Implement next track logic
  }

  onSliderValueChange(args: any) {
    const slider = args.object
    this.currentTime = slider.value
    // Seek to the new position in the track
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite
    // Implement add/remove from favorites logic
  }

  showLyrics() {
    // Implement show lyrics logic
  }
}