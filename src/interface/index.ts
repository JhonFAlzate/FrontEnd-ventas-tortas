import { z } from 'zod';


/**Product */
export const productsSchema = z.object({
    id: z.number(),
    nombreProducto: z.string(),
    precioCompra : z.number(),
    precioVenta: z.number(),
    tipoProducto: z.enum( ['TORTAS','HELADOS', 'OTROS'] )
});

/**Base */
export const dashboardProductSchema = z.array(
    productsSchema
);


type oneProduct = z.infer<typeof productsSchema>;

export type productsPastel = Pick<oneProduct, 'id' | 'nombreProducto' | 'precioCompra' |'precioVenta' |'tipoProducto'>;
export type optionProduct = Pick<oneProduct, 'tipoProducto'>;