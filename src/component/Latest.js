import React from 'react'

const Latest = () => {
  return (
   <>
   
   <div className="container-fluid">
      <div className="my-4 shadow p-2">
        <h2 className="text-center">Trending Products</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4">
       <div className="col">
         <div className="card shadow-lg">
           <img src="https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-Shopping-Infographics.png" className="card-img-top" alt="..."/>
           <div className="card-body">
             <h5 className="card-title">Card title</h5>
             <button className="btn btn-success">View Details</button>
             
           </div>
         </div>
       </div>
       <div className="col">
         <div className="card shadow-lg">
           <img src="https://myrepublica.nagariknetwork.com/uploads/media/eeee_20210524140327.png" className="card-img-top" alt="..."/>
           <div className="card-body">
             <h5 className="card-title">Card title</h5>
             <button className="btn btn-success">View Details</button>
           </div>
         </div>
       </div>
       <div className="col">
         <div className="card shadow-lg">
           <img src="https://bloomidea.com/sites/default/files/styles/og_image/public/blog/Tipos%20de%20come%CC%81rcio%20electro%CC%81nico_0.png?itok=jC9MlQZq" className="card-img-top" alt="..."/>
           <div className="card-body">
             <h5 className="card-title">Card title</h5>
             <button className="btn btn-success">View Details</button>
         </div>
       </div>
       </div>
       <div className="col">
         <div className="card shadow-lg">
           <img src="https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-Shopping-Infographics.png" className="card-img-top" alt="..."/>
           <div className="card-body">
             <h5 className="card-title">Card title</h5>
             <button className="btn btn-success">View Details</button>
           </div>
         </div>
       </div>
     </div>
      
    </div>
 
   </>
  )
}

export default Latest