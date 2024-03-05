import { useDeleteProductMutation } from "../app/service/DummyData"

const DeleteProduct = () => {
   const [deleteProduct,{data,isError,isLoading}] = useDeleteProductMutation()
  
   if(isError) {
      return <h1>there is Error</h1>
   }

   if(isLoading) {
      return <h1>Loading...</h1>
   }


   const handleDelete=  async() => {
      try {
         
         await deleteProduct(1)
      } catch (error) {
         console.error(error)
      }
   }
   return (
    <div>
      <h2>
         {data?.title ? `${data.title} successfully deleted` : "not deleted" }</h2>
      <button onClick={handleDelete} disabled={isLoading}>delete Product</button>
    </div>
  )
}

export default DeleteProduct