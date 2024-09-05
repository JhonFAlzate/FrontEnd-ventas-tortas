import { useQuery } from "@tanstack/react-query";
import { getProduct } from "@/api/ProductsAPI";



export default function Product() {

  const { data, isLoading, isError } = useQuery({
    queryKey:['tortas'],
    queryFn: getProduct,
    retry: false,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products</p>;


  if( data ) return (
    <>
      <h2>Productos</h2>
      <div className="pt-5 grid  gap-5 grid-cols-3">
        {/* { data.map(product =>(
          <ProductsCard
            key={product.id}
            product={product}
          />
        )) } */}
      </div>
    </>
  )
}