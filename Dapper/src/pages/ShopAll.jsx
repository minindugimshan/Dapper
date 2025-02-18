import { Link } from 'react-router-dom'
// import './ShopAll.css'

const ShopAll = () => {
  return (
    <div className="shop-all-page">
      <div className="page-header">
        <h1>SHOP ALL</h1>
      </div>
      
      <div className="container">
        <div className="categories-grid">
          <div className="category-card">
            <div className="category-image">
              <img src="https://via.placeholder.com/500x700" alt="Men's Collection" />
              <div className="category-overlay">
                <h2>Mens Collection</h2>
                <Link to="/collections/men" className="btn outline-btn">Shop Now</Link>
              </div>
            </div>
          </div>
          
          <div className="category-card">
            <div className="category-image">
              <img src="https://via.placeholder.com/500x700" alt="Women's Collection" />
              <div className="category-overlay">
                <h2>Womens Collection</h2>
                <Link to="/collections/women" className="btn outline-btn">Shop Now</Link>
              </div>
            </div>
          </div>
          
          <div className="category-card">
            <div className="category-image">
              <img src="https://via.placeholder.com/500x700" alt="Accessories" />
              <div className="category-overlay">
                <h2>Accessories</h2>
                <Link to="/collections/accessories" className="btn outline-btn">Shop Now</Link>
              </div>
            </div>
          </div>
          
          <div className="category-card">
            <div className="category-image">
              <img src="https://via.placeholder.com/500x700" alt="Footwear" />
              <div className="category-overlay">
                <h2>Footwear</h2>
                <Link to="/collections/footwear" className="btn outline-btn">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="trending-section">
        <div className="container">
          <h2>Trending Categories</h2>
          <div className="trending-grid">
            <Link to="/collections/t-shirts" className="trending-item">
              <img src="https://via.placeholder.com/400x300" alt="T-shirts" />
              <h3>T-shirts</h3>
            </Link>
            <Link to="/collections/denim" className="trending-item">
              <img src="https://via.placeholder.com/400x300" alt="Denim" />
              <h3>Denim</h3>
            </Link>
            <Link to="/collections/oversize" className="trending-item">
              <img src="https://via.placeholder.com/400x300" alt="Oversize Fits" />
              <h3>Oversize Fits</h3>
            </Link>
            <Link to="/collections/loungewear" className="trending-item">
              <img src="https://via.placeholder.com/400x300" alt="Loungewear" />
              <h3>Loungewear</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopAll

