import { dashboardProductSchema } from "../interface";
import api from "../lib/axios";

export const getProduct = async () => {
  const url = `/api/v1/productos`;    
  const { data } = await api.get(url);  
  
  const response = dashboardProductSchema.safeParse( data );

  if( response.success ) return response.data
};
