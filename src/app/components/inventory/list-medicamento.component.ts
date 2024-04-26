import { Component, OnInit } from '@angular/core';
import { medicamento } from '../../interface/Medicamentos';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-medicamento',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-medicamento.component.html',
  styleUrl: './list-medicamento.component.css',
})
export class ListMedicamentoComponent implements OnInit {
  listaMedicamento: medicamento[] = [
    {
      idmedicamento: 1,
      lote: 'AO050',
      nombremedicamento: 'Acetaminofen',
      marca: 'BAYER',
      unidadmedida: 'Caja',
      precio: 100,
      cantidad: 200,
    },
    {
      idmedicamento: 2,
      lote: 'AO030',
      nombremedicamento: 'Metanfetamina',
      marca: 'BAYER',
      unidadmedida: 'Ml',
      precio: 100,
      cantidad: 200,
    },
    {
      idmedicamento: 3,
      lote: 'AO020',
      nombremedicamento: 'Moxicilina',
      marca: 'BAYER',
      unidadmedida: 'Ampolla',
      precio: 100,
      cantidad: 200,
    },
    {
      idmedicamento: 4,
      lote: '67890',
      nombremedicamento: 'Paracetamol',
      marca: 'Advil',
      unidadmedida: 'Cápsula',
      precio: 100,
      cantidad: 50,
    },
    {
      idmedicamento: 5,
      lote: '24680',
      nombremedicamento: 'Amoxicilina',
      marca: 'Amoxil',
      unidadmedida: 'Suspensión',
      precio: 100,
      cantidad: 200,
    },

  ];
  ngOnInit(): void {}
}
