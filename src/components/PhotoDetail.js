import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPhotoById } from '../api/unsplash';

const PhotoDetail = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPhoto = async () => {
      try {
        const response = await fetchPhotoById(id);
        setPhoto(response.data);
      } catch (error) {
        console.error('Error fetching photo:', error);
      }
      setLoading(false);
    };

    loadPhoto();
  }, [id]);

  if (loading) return <p> Loading...</p>;

return (
    <div className="photo-detail">
        {photo && (
            <>
                <img 
                    src={photo.urls.full} 
                    alt={photo.alt_description} 
                    style={{ width: '100%', height: 'auto' }} 
                />
                <h2>Photo title: {photo.alt_description || 'No Title Available'}</h2>
                <h2>Photo description: {photo.description || 'No description available'}</h2>
                <p>By author: {photo.user.name}</p>
            </>
        )}
    </div>
);
};

export default PhotoDetail;