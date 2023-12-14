import React from 'react'
import { ProContext } from './ProContext';
import { useContext } from 'react';



function CartPage() {

    const {products, handleDecrement, handleIncrement} = useContext(ProContext);

    var totalAmount = 0;
    var totalQuantity = 0;

  return (
    <div>
         <section className="h-100 gradient-custom">
  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Cart - 5 items</h5>
          </div>

          {
                products.map((product) =>{
                  totalAmount += product.price * product.quantity;
                  totalQuantity += product.quantity
                  return(
                <div key={product.id}>


          <div className="card-body">
            <div className="row">
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src={product.thumbnail}
                    className="w-100" alt="Mobile" />
                  
                </div>
               
              </div>

              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
               
                <p><strong>{product.title}</strong></p>
                <p> {product.description}</p>
                <p>Brand : {product.brand} </p>
                <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                  title="Remove item">
                  <i className="fas fa-trash"></i>
                </button>
                <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                  title="Move to the wish list">
                  <i className="fas fa-heart"></i>
                </button>
                
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                
                <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                  <button className="btn btn-primary px-3 me-2"
                    onClick={() => handleDecrement(product.id)} type='button' >
                    <i className="fas fa-minus"></i>
                  </button>

                  <div className="form-outline">
                    <input id="form1" min="0" name="quantity" value={product.quantity} type="number" className="form-control text-center" />
                    
                  </div>

                  <button className="btn btn-primary px-3 ms-2"
                    onClick={() => handleIncrement(product.id)} type='button' >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
            

               
                <p className="text-start text-md-center">
                  <strong>Price : ${product.price * product.quantity}</strong>
                </p>
               
              </div>
            </div>
           
            <hr className="my-4" />
            
          </div>
          </div>
              )})
            }
        </div>

      </div>
      <div className="col-md-4 sticky-top">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Price Details</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Total Quantity 
                <span>{totalQuantity}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Free</span>
              </li>
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                
                </div>
                <span><strong>${totalAmount}</strong></span>
              </li>
            </ul>

            <button type="button" className="btn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default CartPage