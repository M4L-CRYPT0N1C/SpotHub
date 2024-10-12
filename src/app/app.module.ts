import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { SearchComponent } from './search/search.component'
import { FavoritesComponent } from './favorites/favorites.component'
import { PlayerComponent } from './player/player.component'
import { SettingsComponent } from './settings/settings.component'
import { MusicService } from './services/music.service'

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FavoritesComponent,
    PlayerComponent,
    SettingsComponent
  ],
  providers: [MusicService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}