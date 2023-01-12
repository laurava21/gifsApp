import { Injectable } from '@angular/core';

@Injectable({
  // no importa donde se haya creado el servico, este va a ser unico en toda la app
  providedIn: 'root'
})
/**
 * Gifs Service is a service for saving historical of researchs
 */
export class GifsService {

  /**
   * Historial: is the array with the searchs
   */
  private _historial: string[] = [];

  /**
   * Get method for obtain historial
   */
  get historial(){
    return [...this._historial];
  }

  /**
   * Method for adding a new search at the beggining of historial
   * @param query is the new search
   */
  buscarGifs(query: string){
    this._historial.unshift(query);
    console.log(this.historial);
  }
}
