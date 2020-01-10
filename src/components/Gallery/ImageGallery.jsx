import React from 'react';
import PhotoCard from '../PhotoCard/ImageGalleryItem';
import Button from '../Button/Button';
import styles from './ImageGallery.module.css';

const Gallery = ({ images, loadMore, onClick }) => {
  const showLargeImage = ({ target }) => {
    const idImage = target.parentElement.id;
    onClick(idImage);
  };
  return (
    <div>
      <ul className={styles.ImageGallery} onClick={showLargeImage}>
        {images.map(({ id, webformat, largeImage, tags }) => (
          <PhotoCard
            id={id}
            webformat={webformat}
            largeImage={largeImage}
            tags={tags}
          />
        ))}
      </ul>
      <Button onClick={loadMore} />
    </div>
  );
};
export default Gallery;
