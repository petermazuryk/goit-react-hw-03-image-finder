import React from 'react';
import styles from './ImageGalleryItem.module.css';

const PhotoCard = ({ id, webformat, tags, showLargeImage }) => {
  return (
    <li
      id={id}
      className={styles.ImageGalleryItem}
      onClick={() => showLargeImage(id)}
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
