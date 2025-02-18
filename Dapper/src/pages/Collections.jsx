import { useState } from 'react'
import { Link } from 'react-router-dom'
// import './Collections.css'

const Collections = () => {
  const [activeTab, setActiveTab] = useState('featured')
  
  const collections = {
    featured: [
      {
        id: 1,
        name: 'Summer Essentials',
        image: 'https://via.placeholder.com/600x800',
        description: 'Beat the heat with our breathable fabrics and relaxed fits.',
        link: '/collections/summer'
      },
      {
        id: 2,
        name: 'Urban Street Style',
        image: 'https://via.placeholder.com/600x800',
        description: 'Contemporary urban fashion for the modern trendsetter.',
        link: '/collections/street-style'
      },
      {
        id: 3,
        name: 'Athleisure',
        image: 'https://via.placeholder.com/600x800',
        description: 'The perfect blend of athletic and leisure wear for everyday comfort.',
        link: '/collections/athleisure'
      }
    ],
    seasonal: [
      {
        id: 4,
        name: 'Spring Collection',
        image: 'https://via.placeholder.com/600x800',
        description: 'Fresh colors and light fabrics to welcome the new season.',
        link: '/collections/spring'
      },
      {
        id: 5,
        name: 'Summer Collection',
        image: 'https://via.placeholder.com/600x800',
        description: 'Stay cool and stylish with our summer selections.',
        link: '/collections/summer'
      },
      {
        id: 6,
        name: 'Fall Collection',
        image: 'https://via.placeholder.com/600x800',
        description: 'Transitional pieces perfect for the changing season.',
        link: '/collections/fall'
      },
      {
        id: 7,
        name: 'Winter Collection',
        image: 'https://via.placeholder.com/600x800',
        description: 'Cozy and stylish options for the colder months.',
        link: '/collections/winter'
      }
    ],
    exclusive: [
      {
        id: 8,
        name: 'Limited Edition Series',
        image: 'https://via.placeholder.com/600x800',
        description: 'Exclusive designs available for a limited time only.',
        link: '/collections/limited-edition'
      },
      {
        id: 9,
        name: 'Designer Collaborations',
        image: 'https://via.placeholder.com/600x800',
        description: 'Special collections created with renowned designers.',
        link: '/collections/collaborations'
      }
    ]
  }

  return (
    <div className="collections-page">
      <div className="page-header">
        <h1>COLLECTIONS</h1>
      </div>
      
      <div className="container">
        <div className="collections-tabs">
          <button 
            className={`tab-btn ${activeTab === 'featured' ? 'active' : ''}`}
            onClick={() => setActiveTab('featured')}
          >
            Featured Collections
          </button>
          <button 
            className={`tab-btn ${activeTab === 'seasonal' ? 'active' : ''}`}
            onClick={() => setActiveTab('seasonal')}
          >
            Seasonal Collections
          </button>
          <button 
            className={`tab-btn ${activeTab === 'exclusive' ? 'active' : ''}`}
            onClick={() => setActiveTab('exclusive')}
          >
            Exclusive Collections
          </button>
        </div>
        
        <div className="collections-grid">
          {collections[activeTab].map((collection) => (
            <div key={collection.id} className="collection-card">
              <div className="collection-image">
                <img src={collection.image} alt={collection.name} />
                <div className="collection-overlay">
                  <Link to={collection.link} className="btn outline-btn">Explore</Link>
                </div>
              </div>
              <div className="collection-info">
                <h2>{collection.name}</h2>
                <p>{collection.description}</p>
                <Link to={collection.link} className="view-collection">
                  View Collection
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collections