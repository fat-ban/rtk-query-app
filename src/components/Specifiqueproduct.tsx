
import { useGetProductByIdQuery } from "../app/service/DummyData";


const Specifiqueproduct = () => {
   const {data,isError, isLoading} = useGetProductByIdQuery(2)
   
   console.log(data);
   if(isError) {
      return <h1>there is Error</h1>
   }

   if(isLoading) {
      return <h1>Loading...</h1>
   }

  return (
    <div className="container">
      <h1>{data?.title}</h1>
      </div>
  )
}

export default Specifiqueproduct