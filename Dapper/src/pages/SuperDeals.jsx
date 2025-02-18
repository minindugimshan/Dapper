import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import './SuperDeals.css'

const SuperDeals = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 30,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime

        if (seconds > 0) {
          seconds -= 1
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes -= 1
          } else {
            minutes = 59
            if (hours > 0) {
              hours -= 1
            } else {
              hours = 23
              if (days > 0) {
                days -= 1
              }
            }
          }
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const dealProducts = [
    {
      id: 1,
      name: 'Premium Cotton Tee',
      regularPrice: 2500,
      salePrice: 1750,
      discount: 30,
      image: 'https://via.placeholder.com/300x400',
      category: 't-shirts'
    },
    {
      id: 2,
      name: 'Relaxed Fit Jeans',
      regularPrice: 4200,
      salePrice: 2940,
      discount: 30,
      image: 'https://via.placeholder.com/300x400',
      category: 'jeans'
    },
    {
      id: 3,
      name: 'Casual Oxford Shirt',
      regularPrice: 3600,
      salePrice: 2160,
      discount: 40,
      image: 'https://via.placeholder.com/300x400',
      category: 'shirts'
        },
{
id: 4,
name: 'Lightweight Hoodie',
regularPrice: 4800,
salePrice: 2880,
discount: 40,
image: 'https://via.placeholder.com/300x400',
category: 'hoodies'
},
{
id: 5,
name: 'Designer Cap',
regularPrice: 1800,
salePrice: 990,
discount: 45,
image: 'https://via.placeholder.com/300x400',
category: 'accessories'
},
{
id: 6,
name: 'Cargo Joggers',
regularPrice: 3900,
salePrice: 2145,
discount: 45,
image: 'https://via.placeholder.com/300x400',
category: 'pants'
},
{
id: 7,
name: 'Denim Jacket',
regularPrice: 5500,
salePrice: 3300,
discount: 40,
image: 'https://via.placeholder.com/300x400',
category: 'jackets'
},
{
id: 8,
name: 'Graphic Print T-Shirt',
regularPrice: 2800,
salePrice: 1680,
discount: 40,
image: 'https://via.placeholder.com/300x400',
category: 't-shirts'
}
]

return (
<div className="super-deals-page">
<div className="page-header">
  <h1>SUPER DEALS</h1>
</div>

<div className="container">
  <div className="deals-banner">
    <h2>Limited Time Offers</h2>
    <div className="countdown-timer">
      <div className="timer-item">
        <span className="timer-value">{timeLeft.days}</span>
        <span className="timer-label">Days</span>
      </div>
      <div className="timer-separator">:</div>
      <div className="timer-item">
        <span className="timer-value">{timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}</span>
        <span className="timer-label">Hours</span>
      </div>
      <div className="timer-separator">:</div>
      <div className="timer-item">
        <span className="timer-value">{timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}</span>
        <span className="timer-label">Minutes</span>
      </div>
      <div className="timer-separator">:</div>
      <div className="timer-item">
        <span className="timer-value">{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</span>
        <span className="timer-label">Seconds</span>
      </div>
    </div>
  </div>
  
  <div className="products-grid">
    {dealProducts.map((product) => (
      <div key={product.id} className="product-card deal-card">
        <div className="product-image">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <div className="discount-badge">-{product.discount}%</div>
          </Link>
          <div className="product-actions">
            <button className="action-btn quick-view">Quick View</button>
            <button className="action-btn add-to-cart">Add to Cart</button>
          </div>
        </div>
        <div className="product-info">
          <h3><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
          <div className="price-container">
            <p className="sale-price">Rs {product.salePrice.toLocaleString()}</p>
            <p className="regular-price">Rs {product.regularPrice.toLocaleString()}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

<div className="promo-section">
  <div className="container">
    <div className="promo-card">
      <h3>Use Code: SUPER30</h3>
      <p>Get an extra 10% off on all sale items</p>
    </div>
    <div className="promo-card">
      <h3>Free Shipping</h3>
      <p>On all orders above Rs 2,500</p>
    </div>
    <div className="promo-card">
      <h3>Easy Returns</h3>
      <p>30-day hassle-free returns</p>
    </div>
  </div>
</div>
</div>
)
}

export default SuperDeals