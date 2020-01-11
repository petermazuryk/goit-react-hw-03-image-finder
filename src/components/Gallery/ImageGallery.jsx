import React from 'react';
import PhotoCard from '../PhotoCard/ImageGalleryItem';
import Button from '../Button/Button';
import styles from './ImageGallery.module.css';

const Gallery = ({ images, loadMore, linkBigImage }) => {
  const showLargeImage = id => {
    linkBigImage(id);
  };

  return (
    <div>
      <ul className={styles.ImageGallery}>
        {images.map(({ id, webformat, tags }) => (
          <PhotoCard
            id={id}
            webformat={webformat}
            tags={tags}
            showLargeImage={showLargeImage}
          />
        ))}
      </ul>
      <Button onClick={loadMore} />
    </div>
  );
};
export default Gallery;
