import React from 'react';
import styles from './ImageGalleryItem.module.css';

const PhotoCard = ({ id, webformat, largeImage, tags }) => {
  const showLargeImage = e => {
    // console.dir(e.currentTarget);
  };

  return (
    <li
      id={id}
      className={styles.ImageGalleryItem}
      key={id}
      onClick={showLargeImage}
    >
      <img
        src={webformat}
        alt={tags}
        className={styles.ImageGalleryItem_image}
      />
    </li>
  );
};

export default PhotoCard;
