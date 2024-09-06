import { productsPastel } from "@/interface/index";
import { FaStore } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";

type ProductsCardProps ={
  product: productsPastel
}

export default function ProductsCard({ product }:ProductsCardProps) {
  
  
  return (
    <>
          <div className="rounded shadow-lg ">
            <div className="relative flex items-center justify-center">
              <a href="#">
                <img
                  className="w-52 flex items-center"
                  src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=300"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <a href="#!">
                <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  { product.tipoProducto }
                </div>
              </a>
            </div>

            <div className="text-center py-3">
              <a
                href="#"
                className="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2 capitalize"
              >
                { product.nombreProducto }
              </a>
            </div>
            <div className=" py-2 px-4 grid gap-2 items-center">
              <p className="flex items-center gap-2">
                <FaStore className="text-indigo-800"/>
                  Venta :
                <span className="font-black uppercase">
                  ${ product.precioVenta }
                </span>
              </p>

              <p className="flex items-center gap-2">
              <FaMoneyBillWave  className="text-indigo-800"/>
                Compra :
                <span className="font-black uppercase">
                  ${ product.precioCompra } 
                </span>
              </p>               
            </div>

            <div className="flex justify-center gap-5 py-5 text-white ">
              <button className="bg-blue-500 rounded-lg py-2 px-5 capitalize font-black transition-colors hover:bg-opacity-80">
                Editar
              </button>
              <button className="bg-red-500 rounded-lg py-2 px-5 capitalize font-black transition-colors hover:bg-opacity-80">
                Eliminar
              </button>
            </div>
          </div>
    </>
  );
}
