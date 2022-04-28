import React, { useState } from 'react';
import {useCart} from "react-use-cart";
import ProductDetails from '../../server/products/index.get';
import Header from '../Main/Home/Header';

function Cart() {
    const { 
        isEmpty,
        items,
        totalItems,
        totalUniqueItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <h1 className='text-center'>your cart us emptyCart</h1>
  return (
    <div>
<Header/>
    <section className='py-4 container'>
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            cart({totalUniqueItems}) Total: ({totalItems})
          </h5>
          <table className='table table-light table-hover m-0'>
            <tbody>
            {items.map((data,index)=> {
              return (
                <tr key={index}>
                <td><img src={data.imageURL} style={{height:'6rem'}}/></td>
                <td>{data.name}</td>
                <td>MRP RS.{data.price}</td>
                <td>Quantity ({data.quantity})</td>
              </tr> 
              )
            })}       
            </tbody>
          </table>
        </div>
        <div className='col-auto ms-auto'>
          <h2>Total Price: Rs. {cartTotal}</h2>
        </div>
        <div className='col-auto'>
            <button className='btn btn-pink m-2'
            onClick={()=> emptyCart()}>
              Clear Cart
            </button>
           
        </div>
      </div>
    </section>
    </div>
    
  );
}

export default Cart