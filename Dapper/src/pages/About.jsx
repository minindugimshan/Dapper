import { Link } from 'react-router-dom'
// import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>ABOUT US</h1>
      </div>
      
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img src="https://via.placeholder.com/600x800" alt="Calista Clothing Story" />
          </div>
          <div className="about-text">
            <h2>Our Story</h2>
            <p>Founded in 2015, Calista Clothing started as a small boutique in Mumbai with a vision to blend contemporary styles with ethical fashion practices. What began as a passion project quickly grew into a beloved brand known for its quality, sustainability, and unique designs.</p>
            <p>Today, Calista has expanded to multiple locations across India and has established a strong online presence, bringing our distinctive style to fashion enthusiasts nationwide.</p>
            <p>Our collections are thoughtfully designed to offer versatile, comfortable, and stylish clothing that adapts to the modern lifestyle while maintaining a commitment to responsible production and fair labor practices.</p>
            <Link to="/contact" className="btn primary-btn">Contact Us</Link>
          </div>
        </div>
        
        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌿</div>
              <h3>Sustainability</h3>
              <p>We're committed to reducing our environmental footprint through responsible sourcing, eco-friendly materials, and sustainable production processes.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3>Quality</h3>
              <p>Every piece we create undergoes rigorous quality checks to ensure longevity, comfort, and exceptional craftsmanship.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Ethical Practices</h3>
              <p>We believe in fair trade and ethical working conditions. All our garments are made in facilities that prioritize worker welfare.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎨</div>
              <h3>Creative Design</h3>
              <p>Our design team blends global trends with local aesthetics to create unique pieces that stand out in any wardrobe.</p>
            </div>
          </div>
        </div>
        
        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="https://via.placeholder.com/300x400" alt="Founder & Creative Director" />
              </div>
              <h3>Priya Sharma</h3>
              <p className="member-role">Founder & Creative Director</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="https://via.placeholder.com/300x400" alt="Head of Design" />
              </div>
              <h3>Rahul Mehta</h3>
              <p className="member-role">Head of Design</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="https://via.placeholder.com/300x400" alt="Production Manager" />
              </div>
              <h3>Ananya Patel</h3>
              <p className="member-role">Production Manager</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="https://via.placeholder.com/300x400" alt="Marketing Director" />
              </div>
              <h3>Vikram Singh</h3>
              <p className="member-role">Marketing Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About