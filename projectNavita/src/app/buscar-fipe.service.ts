import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BuscarFipeService {

   urlMarca = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';
   
  constructor(private htpp: HttpClient) { }

  listarMarcas(){
    return this.htpp.get<any[]>(`${this.urlMarca}`);
  }

  listarModelo(id: number){
    return this.htpp.get<any[]>(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${id}/modelos`);
  }
  //an
}
