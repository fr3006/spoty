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
      'authorization': 'Bearer BQBSGBX8fOLY1a08K4GgKx0PCoVuIoyJECS1oS_JgHA3mBfsGT27-ZOaRk1o2yY0V4Lu4jBTtjrWEJ0k1Dw'
    });
    return this.http.get(url, { headers })
      .map( (resp: any) => {
        this.artistas = resp.artists.items;
         return this.artistas;
    });
  }
}
