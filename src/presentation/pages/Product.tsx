import { useQuery } from "@tanstack/react-query";
import { getProduct } from "@/api/ProductsAPI";
import { ProducsForm, ProductsCard } from "../components";
import { Button, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";



export default function Product() {

  const navigate =  useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey:['tortas'],
    queryFn: getProduct,
    retry: false,
  });


  // const { isOpen, onOpen, onClose } = useDisclosure()




  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products</p>;

  if( data ) return (
    <>
      <h2 className="capitalize font-black text-4xl pb-5 ">Crea administra Tus Tortas</h2>

      <section className="flex items-center gap-5">
        <form 
          action=""
          className="flex gap-2"
        >
          <input 
            type="text" 
            placeholder="Buscar..."
            className="p-2 rounded-md"
          />
          <input 
            value="Buscar"
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 transition-colors hover:cursor-pointer text-white rounded-md p-2 "
            />
        </form>

        <Button onClick={()=> navigate(location.pathname + '?newProduct=true')} colorScheme='blue'>
          Nuevo Producto
        </Button>
      </section>

      <ProducsForm  title="Crear Nuevo Producto"/>


      <div className="pt-5 grid  gap-5 grid-cols-3">
        { data.map(product =>(
          <ProductsCard
            key={product.id}
            product={product}
          />
        )) }

        <div>
        </div>
      </div>
    </>
  )
}