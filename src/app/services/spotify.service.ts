import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[];
  constructor( public http: HttpClient) {
    console.log('servicio listo');
  }
  getArtistas( termino: string) {
    let url = `https://api.spotify.com/v1/search?query=${termino}&type=artist&limit=50`;
    let headers = new HttpHeaders({
      'authorization': 'Bearer BQCxoJlaK0IPVLeNS_JNwYei7LdBHi7TyVYXADyp-7-uRxHarcs1kl9RwCvBhQy_jzXdp50cZSZoatBzsc4'
    });
    return this.http.get(url, { headers })
      .map( (resp: any) => {
        this.artistas = resp.artists.items;
         return this.artistas;
    });
  }
}
