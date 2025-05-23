import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Products = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search")?.toLowerCase() || "";

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([
    "All", "men's clothing", "women's clothing", "jewelery", "electronics"
  ]);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      const products = await response.json();
      setData(products);
      setFilter(products);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = data.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
      );
      setFilter(filtered);
    } else {
      setFilter(data);
    }
  }, [searchTerm, data]);

  const Loading = () => (
    <div className="col-12 py-5 text-center">
      <Skeleton height={40} width={560} />
      <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
        <Skeleton height={592} />
      </div>
      <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
        <Skeleton height={592} />
      </div>
    </div>
  );

  const filterProduct = (category) => {
    if (category === "All") {
      setFilter(data);
    } else {
      const updatedList = data.filter((item) => item.category === category);
      setFilter(updatedList);
    }
  };

  const ShowProducts = () => (
    <div>
      <div className="buttons text-center py-5">
        {categories.map((category, index) => (
          <button
            key={index}
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="row">
        {filter.map((product) => (
          <div
            id={product.id}
            key={product.id}
            className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
          >
            <div className="card text-center h-100">
              <img
                className="card-img-top p-3"
                src={product.image}
                alt="Card"
                height={300}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
                <p className="card-text">{product.description.substring(0, 90)}...</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">
                  ₹{Math.round(product.price * 83)}
                </li>
              </ul>
              <div className="card-body">
                <Link
                  to={`/product/${product.id}`}
                  className="btn btn-dark m-1"
                >
                  Buy Now
                </Link>
                <button
                  className="btn btn-dark m-1"
                  onClick={() => {
                    toast.success("Added to cart");
                    addProduct(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">Latest Products</h2>
          <hr />
        </div>
      </div>
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default Products;
