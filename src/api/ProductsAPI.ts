import { dashboardProductSchema } from "../interface";
import api from "@/lib/axios";

type InputsProduc = {
  nombreProducto: string;
  tipoProducto: string;
  precioVenta: number;
  precioCompra: number;
};



export const getProduct = async () => {
  const url = `/api/v1/productos`;    
  const { data } = await api.get(url);  
  
  const response = dashboardProductSchema.safeParse( data );

  if( response.success ) return response.data
};



export const crateProduct = async (dataForm:InputsProduc)=>{
  const url = `/api/v1/productos`;    

  console.log(dataForm)
  const { data } = await api.post(url, dataForm);

  return data;
};