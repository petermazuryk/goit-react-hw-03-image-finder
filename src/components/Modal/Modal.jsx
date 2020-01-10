import React, { Component, createRef } from 'react';
import styles from './Modal.module.css';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const MODAL_ROOT = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') {
      return;
    }

    this.props.onClose();
  };

  handleBackdropClick = e => {
    if (this.backdropRef.current && e.target !== this.backdropRef.current) {
      return;
    }

    this.props.onClose();
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <div
        className={styles.Overlay}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
        role="presentation"
      >
        <div className={styles.Modal}>{children}</div>
      </div>,
      MODAL_ROOT,
    );
  }
}
