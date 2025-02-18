import { Link } from 'react-router-dom'
import './NewArrivals.css'

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      name: 'Nomad Oversize Linen Shirt',
      price: 4350,
      image: 'https://via.placeholder.com/300x400',
      category: 'shirts'
    },
    {
      id: 2,
      name: 'Chess Couture Oversize Relax T',
      price: 4100,
      image: 'https://via.placeholder.com/300x400',
      category: 't-shirts',
      soldOut: true
    },
    {
      id: 3,
      name: 'Nomad Linen Cargo Pant',
      price: 4850,
      image: 'https://via.placeholder.com/300x400',
      category: 'pants'
    },
    {
      id: 4,
      name: 'SOARING – SUPER OVERSIZE RELAX T',
      price: 3790,
      image: 'https://via.placeholder.com/300x400',
      category: 't-shirts'
    },
    {
      id: 5,
      name: 'Urban Chic Hoodie',
      price: 5200,
      image: 'https://via.placeholder.com/300x400',
      category: 'hoodies'
    },
    {
      id: 6,
      name: 'Street Style Joggers',
      price: 3900,
      image: 'https://via.placeholder.com/300x400',
      category: 'pants'
    },
    {
      id: 7,
      name: 'Minimalist Bomber Jacket',
      price: 6500,
      image: 'https://via.placeholder.com/300x400',
      category: 'jackets'
    },
    {
      id: 8,
      name: 'Vintage Denim Shirt',
      price: 4200,
      image: 'https://via.placeholder.com/300x400',
      category: 'shirts'
    }
  ]

  return (
    <div className="new-arrivals-page">
      <div className="page-header">
        <h1>NEW ARRIVALS</h1>
      </div>
      
      <div className="container">
        <div className="filter-bar">
          <div className="filter-dropdown">
            <select name="category">
              <option value="">Category</option>
              <option value="shirts">Shirts</option>
              <option value="t-shirts">T-shirts</option>
              <option value="pants">Pants</option>
              <option value="jackets">Jackets</option>
              <option value="hoodies">Hoodies</option>
            </select>
          </div>
          <div className="filter-dropdown">
            <select name="size">
              <option value="">Size</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
            </select>
          </div>
          <div className="filter-dropdown">
            <select name="price">
              <option value="">Price</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
          <div className="view-options">
            <button className="view-btn grid active">&#9783;</button>
            <button className="view-btn list">&#9776;</button>
          </div>
        </div>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} />
                  {product.soldOut && <div className="sold-out-badge">Sold Out</div>}
                </Link>
                <div className="product-actions">
                  <button className="action-btn quick-view">Quick View</button>
                  <button className="action-btn add-to-cart" disabled={product.soldOut}>
                    {product.soldOut ? 'Sold Out' : 'Add to Cart'}
                  </button>
                </div>
              </div>
              <div className="product-info">
                <h3><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
                <p className="price">Rs {product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="pagination">
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn next">Next &rsaquo;</button>
        </div>
      </div>
    </div>
  )
}

export default NewArrivals
