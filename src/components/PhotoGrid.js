import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPhotos } from '../api/unsplash';

const PhotoGrid = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    setLoading(true);
    try {
      const response = await fetchPhotos(page);
      setPhotos((prevPhotos) => [...prevPhotos, ...response.data]);
      setPage(page + 1);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
    setLoading(false);
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) return;
    loadPhotos();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (

    <div className="photo-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
        {photos.map((photo) => (
            <div key={photo.id} className="photo-item">
                <Link to={`/photos/${photo.id}`}>
                    <img src={photo.urls.thumb} alt={photo.alt_description} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                    <p>By: {photo.user.name}</p>
                </Link>
            </div>
        ))}
        {loading && <p>Loading...</p>}
    </div>
  );

  
};

export default PhotoGrid;