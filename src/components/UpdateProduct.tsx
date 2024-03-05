import { useUpdateProductMutation } from "../app/service/DummyData.ts";

const UpdateProduct = () => {
   const [updateProduct,{data,isError,isLoading}] = useUpdateProductMutation()
   console.log(data);
   if(isError) {
      return <h1>there is Error</h1>
   }

   if(isLoading) {
      return <h1>Loading...</h1>
   }

   const handleUpdateProduct = async () => {
      try {
         const updatedProductData = {
            title:"updated title",
         }
         await updateProduct ({
            id: 1,
            updatedProduct:updatedProductData
         })
      } catch (error) {
         console.error(error);
      }
   }
   
  return (
    <div>
      <h1>UpDate Product</h1>
      <h3>{data?.title}</h3>
      <button onClick={handleUpdateProduct}>Update product</button>
      </div>
  )
}

export default UpdateProduct