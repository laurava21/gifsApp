import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  // no importa donde se haya creado el servico, este va a ser unico en toda la app
  providedIn: 'root'
})
/**
 * Gifs Service is a service for saving historical of researchs
 */
export class GifsService {

  /**
   * API Key
   */
  private apiKey : string = 'DDMzSxhN1BsvkfhMgT9MXe2OWhVI2yM1';

  /**
   * Service url
   */
  private serviceUrl : string = 'http://api.giphy.com/v1/gifs';

  /**
   * Historial: is the array with the searchs
   */
  private _historial: string[] = [];

  /**
   * Resultados
   */
  public resultados: Gif[] = [];

  /**
   * Get method for obtain historial
   */
  get historial(){

    return [...this._historial];
  }

  /**
   * Constructor
   */
  constructor( private http: HttpClient){
    // Solo se ejecuta la priemra vez que es llamado
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!)|| [];

    // Es equivalente a la linea de arriba
    //if(localStorage.getItem('historial')){
    //  this._historial = JSON.parse(localStorage.getItem('historial')!);
    //}
  } 

  /**
   * Method for adding a new search at the beggining of historial
   * @param query is the new search
   */
  buscarGifs(query: string = ''){

    // Check if is yet at historial
    if(!this._historial.includes(query)){

      query = query.trim().toLowerCase();

      // Add query at the begginning of array 
      this._historial.unshift(query);

      // Cut the array with the last 10 items
      this._historial = this._historial.splice(0,10);

      // Save at local storage 
      localStorage.setItem('historial', JSON.stringify(this._historial));

      console.log(this.historial);
    }

    const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', '10')
        .set('q', query);

    // Api Request
    this.http.get<SearchGifsResponse>(`${this.serviceUrl}/search`, {params: params})
          .subscribe((resp) => { 
            console.log(resp.data);
            this.resultados = resp.data;

            // Save at local storage the last gifs
            localStorage.setItem('resultados', JSON.stringify(this.resultados));
          })

  }


}
