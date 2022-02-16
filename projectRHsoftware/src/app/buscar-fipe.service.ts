import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ModeloMarca } from './modelo.model';

@Injectable({
  providedIn: 'root'
})
export class BuscarFipeService {

   urlMarca = 'https://dentalclouddev.s3.amazonaws.com/challenge/tarot.json';

  constructor(private htpp: HttpClient) { }

  listarMarcas(){
    return this.htpp.get<any[]>(`${this.urlMarca}`);
  }

  listarModelo(id: number){
    return this.htpp.get<ModeloMarca>(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${id}/modelos`);
  }

}
