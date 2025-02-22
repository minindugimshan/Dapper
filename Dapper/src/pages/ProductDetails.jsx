import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Share2, Minus, Plus, ArrowLeft, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState('JET BLACK');
  const [selectedSize, setSelectedSize] = useState('XL');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlist, setIsWishlist] = useState(false);

  const product = {
    name: 'Nomad Oversize Linen Shirt',
    price: 4350.00,
    colors: [
      { name: 'JET BLACK', code: '#000000' },
      { name: 'DARK ASH', code: '#808080' },
      { name: 'White', code: '#FFFFFF' },
      { name: 'MINT GREEN', code: '#98FF98' },
      { name: 'ALEXA Ed Red', code: '#FF0000' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/api/placeholder/600/800',
      '/api/placeholder/600/800',
      '/api/placeholder/600/800',
      '/api/placeholder/600/800'
    ],
    details: {
      material: 'Heavy Stretch Twill Linen Fabric',
      fit: 'Oversize relax fit'
    },
    relatedProducts: [
      {
        id: 1,
        name: 'COFFEE CLUB OVERSIZED CROP T',
        price: 1890.00,
        originalPrice: 2650.00,
        image: '/api/placeholder/300/400'
      },
      {
        id: 2,
        name: 'COFFEE CLUB OVERSIZED RELAX T',
        price: 3350.00,
        image: '/api/placeholder/300/400'
      }
    ]
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleQuantityChange = (type) => {
    setQuantity(prev => {
      if (type === 'decrease' && prev > 1) return prev - 1;
      if (type === 'increase') return prev + 1;
      return prev;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="relative">
          <img 
            src={product.images[currentImageIndex]} 
            alt={product.name} 
            className="w-full rounded-lg"
          />
          <button 
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
            <ArrowRight className="h-6 w-6" />
          </button>
          
          <div className="flex mt-4 gap-2">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-20 h-20 rounded-md overflow-hidden ${
                  currentImageIndex === index ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="mt-4">
            <span className="text-2xl font-semibold">Rs {product.price.toLocaleString()}</span>
          </div>

          {/* Color Selection */}
          <div className="mt-6">
            <h3 className="text-sm font-medium">Color: {selectedColor}</h3>
            <div className="flex gap-2 mt-2">
              {product.colors.map(color => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color.name ? 'ring-2 ring-blue-500' : ''
                  }`}
                  style={{ backgroundColor: color.code }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-6">
            <h3 className="text-sm font-medium">Size: {selectedSize}</h3>
            <div className="flex gap-2 mt-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded border ${
                    selectedSize === size 
                      ? 'bg-black text-white' 
                      : 'border-gray-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <h3 className="text-sm font-medium">Quantity</h3>
            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={() => handleQuantityChange('decrease')}
                className="p-2 border rounded"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="text-xl">{quantity}</span>
              <button
                onClick={() => handleQuantityChange('increase')}
                className="p-2 border rounded"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex gap-4">
            <button className="flex-1 bg-black text-white py-3 rounded-md hover:bg-gray-800">
              Add to Cart
            </button>
            <button className="flex-1 bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600">
              Buy Now
            </button>
            <button 
              onClick={() => setIsWishlist(!isWishlist)}
              className="p-3 border rounded-md"
            >
              <Heart 
                className={`h-6 w-6 ${isWishlist ? 'fill-red-500 text-red-500' : ''}`} 
              />
            </button>
            <button className="p-3 border rounded-md">
              <Share2 className="h-6 w-6" />
            </button>
          </div>

          {/* Product Details */}
          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Product Details</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Material</span>
                  <span>{product.details.material}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fit</span>
                  <span>{product.details.fit}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Frequently Bought Together</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {product.relatedProducts.map(item => (
            <div key={item.id} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              <div className="mt-4">
                <h3 className="font-medium">{item.name}</h3>
                <div className="flex gap-2 items-center mt-1">
                  <span className="font-semibold">Rs {item.price.toLocaleString()}</span>
                  {item.originalPrice && (
                    <span className="text-gray-500 line-through">
                      Rs {item.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;