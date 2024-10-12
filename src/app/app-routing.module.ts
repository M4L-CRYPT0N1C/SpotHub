import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { HomeComponent } from './home/home.component'
import { SearchComponent } from './search/search.component'
import { FavoritesComponent } from './favorites/favorites.component'
import { PlayerComponent } from './player/player.component'
import { SettingsComponent } from './settings/settings.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'settings', component: SettingsComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}