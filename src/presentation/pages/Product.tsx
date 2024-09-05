import { ProductsCard } from "../components";

export default function Product() {
  return (
    <>

      <div  className="p-10 flex flex-row gap-10 overflow-x-auto">
        <ProductsCard/>
        <ProductsCard/>
        <ProductsCard/>
        <ProductsCard/>
        <ProductsCard/>



      </div>
    </>
  )
}