import React from "react";
import { Footer, Navbar } from "../components";

// Reusable Card Component for Product Categories
const ProductCard = ({ imgSrc, title, altText }) => {
  return (
    <div className="col-md-3 col-sm-6 mb-3 px-3">
      <div className="card h-100 shadow-sm">
        <img
          className="card-img-top img-fluid"
          src={imgSrc}
          alt={altText}
          height={160}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center display-4 text-dark">About Us</h1>
        <hr />
        <p className="lead text-center text-muted">
          Welcome to ShopDaily, your ultimate online destination for stylish
          fashion and cutting-edge electronics. We offer a diverse range of
          products including men’s and women’s clothing, elegant jewelry, and
          the latest electronic gadgets—all carefully curated to meet the needs
          of modern, trend-conscious shoppers. Whether you're upgrading your
          wardrobe, accessorizing with timeless pieces, or exploring innovative
          tech, TrendyCart is here to make your shopping experience seamless,
          affordable, and enjoyable. With a focus on quality, style, and
          customer satisfaction, we’re committed to delivering products that
          enhance your lifestyle, backed by fast shipping, secure payments, and
          responsive support.
        </p>

        <h2 className="text-center py-4 text-dark">Our Products</h2>
        <div className="row">
          <ProductCard
            imgSrc="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Men's Clothing"
            altText="Men's Clothing"
          />
          <ProductCard
            imgSrc="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Women's Clothing"
            altText="Women's Clothing"
          />
          <ProductCard
            imgSrc="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Jewelry"
            altText="Jewelry"
          />
          <ProductCard
            imgSrc="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Electronics"
            altText="Electronics"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
