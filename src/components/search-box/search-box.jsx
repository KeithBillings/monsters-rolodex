import { Component } from 'react';
import './search-box.css';

class SearchBox extends Component {
  render() {
    const { handleOnSearch, placeholder } = this.props;
    const classNames = this.props.className ? 'search-box ' + this.props.className : 'search-box';

    return <input className={classNames} type='search' placeholder={placeholder || 'Search'} onChange={handleOnSearch} />;
  }
}

export default SearchBox;
