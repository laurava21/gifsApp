import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

/**
 * Resultados component
 */
@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent {

  /**
   * Get of resultados saves at GifsService
   */
  get resultados(){
    return this.gifsService.resultados;
  }

  /**
   * Constructor
   */
  constructor(private gifsService: GifsService){}
}
