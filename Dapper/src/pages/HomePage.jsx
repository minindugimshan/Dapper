import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './HomePage.css'

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      id: 1,
      image: 'https://via.placeholder.com/1600x800',
      title: 'Spring Collection 2025',
      subtitle: 'Discover fresh styles for the new season',
      buttonText: 'Shop Now',
      buttonLink: '/collections/spring'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/1600x800',
      title: 'Super Deals Week',
      subtitle: 'Up to 50% off on selected items',
      buttonText: 'View Offers',
      buttonLink: '/super-deals'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/1600x800',
      title: 'Exclusive Membership',
      subtitle: 'Join now for special perks and early access',
      buttonText: 'Learn More',
      buttonLink: '/membership'
    }
  ]

  const featuredProducts = [
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
      category: 't-shirts'
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
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const handleDotClick = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="home-page">
      {/* Hero Slider */}
      <section className="hero-slider">
        <div className="slider-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide) => (
            <div key={slide.id} className="slide" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <Link to={slide.buttonLink} className="btn primary-btn">
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </section>

      {/* Category Banners */}
      <section className="category-banners">
        <div className="container">
          <div className="banner" style={{ backgroundImage: 'url(https://via.placeholder.com/600x300)' }}>
            <div className="banner-content">
              <h2>Men's Collection</h2>
              <Link to="/collections/men" className="btn outline-btn">Explore</Link>
            </div>
          </div>
          <div className="banner" style={{ backgroundImage: 'url(https://via.placeholder.com/600x300)' }}>
            <div className="banner-content">
              <h2>Women's Collection</h2>
              <Link to="/collections/women" className="btn outline-btn">Explore</Link>
            </div>
          </div>
          <div className="banner" style={{ backgroundImage: 'url(https://via.placeholder.com/600x300)' }}>
            <div className="banner-content">
              <h2>Accessories</h2>
              <Link to="/collections/accessories" className="btn outline-btn">Explore</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <Link to="/shop-all" className="view-all">
              View All <FaArrowRight />
            </Link>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-actions">
                    <button className="action-btn">Quick View</button>
                    <button className="action-btn">Add to Cart</button>
                  </div>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="price">Rs {product.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="promotion-banner" style={{ backgroundImage: 'url(https://via.placeholder.com/1600x500)' }}>
        <div className="container">
          <div className="promo-content">
            <h2>Special Offer</h2>
            <h3>Get 30% Off on New Arrivals</h3>
            <p>Use code: NEWSTYLE30</p>
            <Link to="/new-arrivals" className="btn primary-btn">Shop Now</Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="instagram-feed">
        <div className="container">
          <div className="section-header">
            <h2>Follow Us On Instagram</h2>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="view-all">
              @calista_clothing <FaArrowRight />
            </a>
          </div>
          <div className="instagram-grid">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="instagram-item">
                <img src={`https://via.placeholder.com/300x300?text=Instagram+${index + 1}`} alt="Instagram post" />
                <div className="instagram-overlay">
                  <FaInstagram />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage