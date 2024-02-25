import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'


const Cart = () => {
  return (
   <>
<Navbar/>
       {/* start of cart content  */}
     <div className="container">
         <div className="row d-flex justify-content-between mt-5 mb-3">
            <h2 className="text-center">Your Cart Items</h2>
             <div className="col-md-8 d-flex align-items-center shadow p-2">
                 
                 <div className="col-3">
                     <img src="https://images-eu.ssl-images-amazon.com/images/I/41jRzGyDUJL.jpg" alt="" width="50" />
                 </div>
                 <div className="col-3">
                     <b><span>RedMi 9A</span></b>
                 </div>
                 <div className="col-2 text-warning">Rs.30000</div>
                 <div className="col-2">3</div>
                 <div className="col-1">
                     <button className="btn btn-danger">Delete</button>
                 </div>
             </div>
             <div className="col-md-3">
                 <div className="shadow p-2">
                     <h5>Cart Summary</h5>
                     <hr/>
                     <span><b>Units:</b> 1(Units)</span><br/>
                     <span><b>Total:</b> Rs.30000</span>
                     <hr/>
                     <button className="btn btn-warning">Check Out</button>
                 </div>
             </div>


         </div>
     </div>

     {/* // end of cart content  */}
   
   <Footer/>
   </>
  )
}

export default Cart