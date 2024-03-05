import { useAddNewProductMutation } from "../app/service/DummyData.ts";

const AddNewProduct = () => {
   const [addNewProduct,{data,isError,isLoading}] = useAddNewProductMutation()
   console.log(data);
   if(isError) {
      return <h1>{"some wornning"}</h1>
      }

   if (isLoading) { 
      return <h1>Loading.....</h1>
      }

const handleAddProduct = async () => {
try {
   const newProductData = {
      id:1,
      title:"t-shirt",
      description: "A basic T-shirt"
   }
    await addNewProduct(newProductData).unwrap()
} catch (error) {
   console.log(`product not added ${error}`);
}


      }


  return (
    <div>
      <p>{data?.title}</p>
      <p>{data?.description}</p>
      <h1>Add New Product</h1>
      <button onClick={handleAddProduct} disabled={isLoading}>Add Product</button>
    </div>
  )
}

export default AddNewProduct