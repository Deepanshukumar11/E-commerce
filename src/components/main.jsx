import React, { useEffect, useState } from "react";
import { addCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Added to cart!");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        const filtered = data.filter((p) => p.rating.rate > 3.5);
        setProducts(filtered);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        toast.error("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const chunkedProducts = [];
  for (let i = 0; i < products.length; i += 4) {
    chunkedProducts.push(products.slice(i, i + 4));
  }

  return (
    <>
      <div className="text-center mt-4">
        <h2 className="display-5 fw-bold text-dark ">Top Rated Products</h2>
        <hr className="w-25 mx-auto" />
      </div>

      <div className="container my-4">
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 fs-6">Fetching awesome deals for you...</p>
          </div>
        ) : (
          <div
            id="productCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="4000"
          >
            <div className="carousel-inner">
              {chunkedProducts.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className={`carousel-item ${groupIndex === 0 ? "active" : ""}`}
                >
                  <div className="row">
                    {group.map((product) => (
                      <div key={product.id} className="col-12 col-sm-6 col-lg-3 mb-3">
                        <div className="card h-100 shadow rounded-4 border-0 p-2">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="card-img-top p-3"
                            style={{ height: "250px", objectFit: "contain" }}
                          />
                          <div className="card-body d-flex flex-column">
                            <h6 className="card-title fw-semibold text-truncate">{product.title}</h6>
                            <small className="text-muted mb-1">{product.category}</small>
                            <p className="fw-bold text-dark">₹{Math.round(product.price * 83)}</p>
                            <p
                              className="text-muted small flex-grow-1"
                              style={{
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                display: "-webkit-box",
                              }}
                            >
                              {product.description}
                            </p>
                            <p className="text-warning mb-2">
                              Rating: {product.rating.rate} ⭐
                            </p>
                            <div className="d-flex justify-content-between">
                              <Link
                                to={`/product/${product.id}`}
                                className="btn btn-outline-dark btn-sm"
                              >
                                Buy Now
                              </Link>
                              <button
                                className="btn btn-dark btn-sm"
                                onClick={() => addProduct(product)}
                              >
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon bg-dark rounded-circle p-2" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon bg-dark rounded-circle p-2" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
