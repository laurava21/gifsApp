import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

/**
 * Sideabar component
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  /**
   * Get historial of service
   */
  get historial(){
    return this.gifsService.historial;
  }

  /**
   * Constructor
   */
  constructor(private gifsService: GifsService){}

  /**
   * Method to create http request of one item of sidebar
   */
  buscar( termino: string){
    console.log(termino);
    this.gifsService.buscarGifs(termino);
  }


}
