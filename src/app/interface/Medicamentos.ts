export interface medicamento {
  /*     Nombres de los datos como estan en la tabla de la DB
   */
  idmedicamento?: number;
  lote: string;
  nombremedicamento: string;
  marca: string;
  unidadmedida: string;
  precio: number;
  cantidad: number;
}
