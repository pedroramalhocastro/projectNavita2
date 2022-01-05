import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BuscarFipeService } from '../buscar-fipe.service';
import { ModeloMarca } from '../modelo.model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  marcas: Array<any> = [];
  modelo: Array<any> = []
  modelo2: ModeloMarca = {
    ano: [] = [],
    modelos: []
  };
  displayedColumns: string[] = [ 'nome','codigo'];
  displayedColumns2: string[] = [ 'nome'];
  dataSource = new MatTableDataSource(this.marcas);
  dataSourceModelo = new MatTableDataSource(this.modelo2.modelos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private buscarFipe: BuscarFipeService) { }

  ngOnInit(): void {
    this.listarMarcas();
  }

  listarMarcas(){
    this.buscarFipe.listarMarcas().subscribe( (dados) => {
      this.marcas = dados;
      this.dataSource = new MatTableDataSource(this.marcas);
      this.dataSource.paginator = this.paginator;
    });
  }

  onAplicacaoClick(event: any){
    let codigo = parseInt(event);
    this.buscarFipe.listarModelo(codigo).subscribe( (dados) =>
    { this.modelo2 = dados;
      this.dataSourceModelo = new MatTableDataSource(this.modelo2.modelos);
    });
  }
}
