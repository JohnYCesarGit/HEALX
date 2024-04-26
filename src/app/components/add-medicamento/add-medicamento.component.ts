import { RouterLink } from '@angular/router';
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
  selector: 'app-add-medicamento',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './add-medicamento.component.html',
  styleUrl: './add-medicamento.component.css',
})
export class AddMedicamentoComponent implements OnInit {
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
  ngOnInit(): void {}
//   productosVal(){
//     const product: medicamento = {
//       idmedicamento: this.formulario.value.idmedicamento,
//       lote: this.formulario.value.lote,
//       nombremedicamento: this.formulario.value.nombremedicamento,
//       marca: this.formulario.value.marca,
//       unidadmedida: this.formulario.value.unidadmedida,
//       precio: this.formulario.value.precio,
//       cantidad: this.formulario.value.cantidad,
//     }
//     console.log(product);
//   }


   addMedicamento(){
     console.log('Add medicamento');
     const medicament: medicamento = {
      lote: this.formulario.get('lote')?.value,
      nombremedicamento: this.formulario.get('nombremedicamento')?.value,
      marca: this.formulario.get('marca')?.value,
      unidadmedida: this.formulario.get('unidadmedida')?.value,
      precio: this.formulario.get('precio')?.value,
      cantidad: this.formulario.get('cantidad')?.value
     }
     console.log(medicament);
   }
}
