import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista: any = { };
  pista: any[] = [];
  constructor(private _activatedRoute: ActivatedRoute,
              public _spoty: SpotifyService) {  }

  ngOnInit() {
    this._activatedRoute.params
                           .map( params => params['id'])
                           .subscribe(id => {
                           console.log( id );
                           this._spoty.getArtista(id)
                           .subscribe( artista => {
                            this.artista = artista;
                          });
          this._spoty.getTop(id)
          .map ( (resp: any) => resp.tracks )
         .subscribe( pistas => {
            console.log( pistas );
            this.pista = pistas;
         });
      });
  }

}
