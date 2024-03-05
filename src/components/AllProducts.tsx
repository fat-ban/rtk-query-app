import { useGetAllProductQuery } from "../app/service/DummyData.ts"


  

const AllProducts = () => {
  
const {data,isError,isLoading} = useGetAllProductQuery()
console.log(data)
if(isError) {
return <h1>{"some wornning"}</h1>
}
if (isLoading) { 
return <h1>Loading.....</h1>
}

  return (
    <div className="bg-light container">
      <h1>AllProducts</h1>
      <div className="row">
       
    
          {data?.products.map( product =>(
          
              <h1 className="col fs-6 border border-primary m-2" key={product.id}>{product.title}</h1>
           
          ))}
         
          
    
        
      </div>
      
    </div>
    
  )
}

export default AllProducts