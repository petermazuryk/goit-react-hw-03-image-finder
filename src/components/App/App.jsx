import React, { Component, createRef } from 'react';
import SearchForm from '../SearchForm/SearchBar';
import * as imageAPI from '../../services/image-api';
import ErrorNotification from '../ErrorNotification/ErrorNotification';
import Loader from '../Loader/Loader';
import { mapper } from '../../services/mapper';
import Gallery from '../Gallery/ImageGallery';
import styles from './App.module.css';
import Modal from '../Modal/Modal';

export default class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    pageNumber: 1,
    query: '',
    isModalOpen: false,
    linkLargeImage: '',
  };

  rootRef = createRef();

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, pageNumber } = this.state;
    this.setState({ isLoading: true });

    imageAPI
      .fetchImg(query, pageNumber)
      .then(images => {
        this.setState(state => ({
          images: [...state.images, ...mapper(images)],
          pageNumber: state.pageNumber + 1,
        }));
      })
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      });
    this.rootRef.current.scrollTop = this.rootRef.current.scrollHeight;
  };

  onSearch = query => {
    this.setState({ query, images: [], pageNumber: 1 });
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  linkBigImage = id => {
    const currentItemImage = this.state.images.find(
      item => item.id === Number(id),
    );
    this.openModal();
    this.setState({ linkLargeImage: currentItemImage.largeImage });
  };

  render() {
    const {
      error,
      isLoading,
      images,
      isModalOpen,
      linkLargeImage,
    } = this.state;
    return (
      <div ref={this.rootRef} className={styles.App}>
        <SearchForm onSearch={this.onSearch} />
        {error && <ErrorNotification message={error.message} />}
        {isLoading && <Loader />}
        {images.length > 0 && (
          <Gallery
            images={images}
            loadMore={this.fetchImages}
            onClick={this.linkBigImage}
          />
        )}
        {isModalOpen && (
          <Modal onClose={this.closeModal}>
            <img src={linkLargeImage} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}
