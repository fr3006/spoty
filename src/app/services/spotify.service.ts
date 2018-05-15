import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[];
  urlSpoty: string = 'https://api.spotify.com/v1/';
  token: string = 'BQB64BLahksnUqv3k9FpqEagkZTnmaIdUbaRuwuWrwuvsHR9eCJ2q5mlvZTUxjkMK2mOfIcv_pOFL_olHQU';
  constructor( public http: HttpClient) {
    console.log('servicio listo');
  }
  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });
    return headers;
  }

  getTop( id: string) {
   let url = `${ this.urlSpoty }artists/${ id }/top-tracks?country=US`;
   let headers  = this.getHeaders();
   return this.http.get(url, { headers });

  }
//consulta artista por string de  busqueda 
  getArtistas( termino: string) {
    let url = `${ this.urlSpoty}search?query=${termino}&type=artist&limit=50`;
    let headers = this.getHeaders();
    return this.http.get(url, { headers })
      .map( (resp: any) => {
        this.artistas = resp.artists.items;
         return this.artistas;
    });
   }
   
   //busca un artista en particular por id de busqueda
   getArtista(id: string) {
    let url = `${ this.urlSpoty }artists/${ id }`;
    let headers = this.getHeaders();
    return this.http.get(url, { headers });
      /*.map( (resp: any) => {
        this.artistas = resp.artists.items;
         return this.artistas;
    });*/
  }
}
