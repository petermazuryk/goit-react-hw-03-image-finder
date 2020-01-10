import React, { Component } from 'react';
import styles from './SearchBar.module.css';

export default class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    return (
      <div className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button className={styles.SearchForm_button}>
            <label className={styles.SearchForm_button_label} />
          </button>
          <input
            className={styles.SearchForm_input}
            type="text"
            autoComplete="off"
            placeholder="Search images..."
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
