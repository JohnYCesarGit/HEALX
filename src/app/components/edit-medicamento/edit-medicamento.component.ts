import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { medicamento } from '../../interface/Medicamentos';

@Component({
  selector: 'app-edit-medicamento',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './edit-medicamento.component.html',
  styleUrl: './edit-medicamento.component.css',
})
export class EditMedicamentoComponent implements OnInit  {
  formulario: FormGroup;

  constructor(private frm: FormBuilder) {
    this.formulario = this.frm.group({
      lote: ['', Validators.required],
      nombremedicamento: ['', Validators.required],
      marca: ['', Validators.required],
      unidadmedida: ['', Validators.required],
      precio: ['', Validators.required],
      cantidad: ['', Validators.required],
    });
  }
  ngOnInit(): void {
      
  }
  productosVal(){
    const product: medicamento = {
      idmedicamento: this.formulario.value.idmedicamento,
      lote: this.formulario.value.lote,
      nombremedicamento: this.formulario.value.nombremedicamento,
      marca: this.formulario.value.marca,
      unidadmedida: this.formulario.value.unidadmedida,
      precio: this.formulario.value.precio,
      cantidad: this.formulario.value.cantidad,
    }
    console.log(product);
  }
  
}
