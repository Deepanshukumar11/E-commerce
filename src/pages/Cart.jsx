import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const addItem = (product) => dispatch(addCart(product));
  const removeItem = (product) => dispatch(delCart(product));

  const EmptyCart = () => (
    <div className="container text-center py-5">
      <h3 className="mb-4">🛒 Your Cart is Empty</h3>
      <Link to="/" className="btn btn-outline-dark">
        <i className="fa fa-arrow-left me-2"></i>Continue Shopping
      </Link>
    </div>
  );

  const ShowCart = () => {
    const subtotal = state.reduce((acc, item) => acc + item.price * item.qty, 0);
    const shipping = 30;
    const totalItems = state.reduce((acc, item) => acc + item.qty, 0);

    return (
      <section className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-header bg-white border-bottom">
                <h5 className="mb-0">🛍️ Items in Your Cart</h5>
              </div>
              <div className="card-body">
                {state.map((item) => (
                  <div key={item.id} className="mb-4">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <img src={item.image} alt={item.title} className="img-fluid rounded" />
                      </div>
                      <div className="col-5">
                        <h6>{item.title}</h6>
                        <p className="text-muted mb-1">Quantity: {item.qty}</p>
                        <p className="mb-0 fw-bold">₹{Math.round(item.price.toFixed(2) * 83)}</p>
                      </div>
                      <div className="col-4 d-flex align-items-center justify-content-end">
                        <button className="btn btn-outline-secondary me-2" onClick={() => removeItem(item)}>
                          <i className="fas fa-minus"></i>
                        </button>
                        <span className="mx-2">{item.qty}</span>
                        <button className="btn btn-outline-secondary" onClick={() => addItem(item)}>
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0">
              <div className="card-header bg-light border-bottom">
                <h5 className="mb-0">💳 Order Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item d-flex justify-content-between">
                    Products ({totalItems}) <span>₹{Math.round(subtotal.toFixed(2)* 83)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    Shipping <span>₹{Math.round(shipping.toFixed(2)* 83)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between fw-bold">
                    Total <span>₹{Math.round((subtotal + shipping).toFixed(2)* 83)}</span>
                  </li>
                </ul>
                <Link to="/checkout" className="btn btn-dark w-100">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <h1 className="text-center mb-4">Cart</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
