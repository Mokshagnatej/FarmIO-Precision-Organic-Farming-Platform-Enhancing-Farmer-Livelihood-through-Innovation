import React, { useState, useEffect } from 'react';
import '../styles/Gallery.css';

function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch('/api/gallery')
      .then(res => res.json())
      .then(data => {
        setImages(data.images);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching gallery:', err);
        setLoading(false);
      });
  }, []);

  const categories = ['all', 'irrigation', 'organic', 'technology', 'monitoring', 'sustainable', 'management', 'precision'];

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

  if (loading) {
    return <div className="loading">Loading gallery...</div>;
  }

  return (
    <div className="gallery">
      <section className="gallery-header">
        <h1>Project Gallery</h1>
        <p className="subtitle">Precision and organic farming in action</p>
      </section>

      <section className="gallery-filters">
        <h3>Filter by Category:</h3>
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </section>

      <section className="gallery-grid">
        {filteredImages.length > 0 ? (
          filteredImages.map(image => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.url} alt={image.title} loading="lazy" />
              <div className="image-overlay">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
                <span className="category-tag">{image.category}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No images found in this category.</p>
        )}
      </section>

      {/* Image Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImage(null)}>✕</button>
            <img src={selectedImage.url} alt={selectedImage.title} />
            <div className="lightbox-info">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
              <span className="category-tag">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}

      {/* Image Descriptions Section */}
      <section className="gallery-descriptions">
        <h2>Project Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <h3>🌾 Precision Irrigation</h3>
            <p>Advanced automated irrigation systems that deliver water exactly where and when crops need it, reducing waste and improving yields.</p>
          </div>
          <div className="highlight-card">
            <h3>🌱 Organic Farming</h3>
            <p>Sustainable organic cultivation practices that improve soil health, reduce chemical dependency, and promote biodiversity.</p>
          </div>
          <div className="highlight-card">
            <h3>📡 IoT Sensors</h3>
            <p>Real-time environmental monitoring using deployed IoT sensors for soil, temperature, and humidity tracking.</p>
          </div>
          <div className="highlight-card">
            <h3>💚 Sustainable Agriculture</h3>
            <p>Environmentally responsible farming methods that conserve natural resources and ensure long-term productivity.</p>
          </div>
          <div className="highlight-card">
            <h3>📊 Data Management</h3>
            <p>Comprehensive farm data visualization and management platform for informed decision-making.</p>
          </div>
          <div className="highlight-card">
            <h3>👨‍🌾 Farmer Empowerment</h3>
            <p>Technology and training to empower small and medium-scale farmers with modern agricultural tools.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;

