import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { FormsModule  } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  termino: string = '';

  constructor(public _spotify: SpotifyService) {
   //aca podriamos poner  loading!!


   }
  buscarArtista() {

   /* if ( this.termino.length === 0) {
      return;
    }*/

    this._spotify.getArtistas( this.termino )
           .subscribe( artistas => {
                          console.log('listo');
                            console.log(artistas);

       });
  }
  ngOnInit() {
  }
}
