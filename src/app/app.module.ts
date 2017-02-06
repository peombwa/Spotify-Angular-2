import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {SpotifyService} from './services/spotify.service';

import {NavbarComponent} from './components/navbar/navbar.component';
import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';

import {appRouterProviders} from './app.route';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule , FormsModule, HttpModule,appRouterProviders],
  declarations: [ AppComponent , NavbarComponent, AboutComponent, SearchComponent, ArtistComponent,AlbumComponent],
  bootstrap:    [ AppComponent ],
  providers:[SpotifyService]

})

export class AppModule { }
