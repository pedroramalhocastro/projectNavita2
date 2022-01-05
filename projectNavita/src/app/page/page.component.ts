import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BuscarFipeService } from '../buscar-fipe.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  marcas: Array<any> = [];
  modelo: Array<any> = [];
  displayedColumns: string[] = [ 'nome','codigo'];
  dataSource = new MatTableDataSource(this.marcas);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private buscarFipe: BuscarFipeService) { }

  ngOnInit(): void {
    this.listarMarcas();
  }

  listarMarcas(){
    this.buscarFipe.listarMarcas().subscribe( dados => this.marcas = dados);
  }

  onAplicacaoClick(event: any){
    let codigo = parseInt(event);
    
    this.buscarFipe.listarModelo(codigo).subscribe( (dados) =>
    { this.modelo = dados;
      this.dataSource = new MatTableDataSource(this.marcas);
      this.dataSource.paginator = this.paginator;
    });
  }
}
