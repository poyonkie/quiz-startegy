// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Actions
import * as actions from './actions';

// Utils
import { isFirstRender } from '../../lib/utils/frontend';

class Gallery extends Component {
  static propTypes = {
    loadGallery: PropTypes.func.isRequired,
    pictures: PropTypes.array,
    picture: PropTypes.array
  }

  constructor(props) {
    super(props);

    this.state = {
      displaySinglePicture: false
    }
  }

  componentWillMount() {
    const {
      match: {
        params: {
          id = 0
        }
      }
    } = this.props;

    this.setState({
      displaySinglePicture: id > 0
    });

    if (id > 0) {
      this.props.loadSinglePicture({ id });
    } else {
      this.props.loadGallery();
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      match: {
        params: {
          id = 0
        }
      }
    } = nextProps;

    if (nextProps.match.params !== this.props.match.params) {
      this.setState({
        displaySinglePicture: id > 0
      });

      if (id > 0) {
        this.props.loadSinglePicture({ id });
      }
    }
  }

  renderSinglePicture(picture) {
    return picture.map((i, key) => <div key={key}>
      <Link to='/gallery'>Go Back</Link>
      <h2>{ i.title }</h2>
      <img src={i.url} />
    </div>);
  }

  renderAllPictures(pictures) { // thumbnailUrl
    return (<div>
      <h2>Gallery is</h2>
      <ul>
        { pictures.map((i, key) => <li key={key}><Link to={`/gallery/${i.id}`}>{ i.title }</Link></li>) }
      </ul>
    </div>);
  }

  render() {
    const {
      pictures,
      picture
    } = this.props;

    if (!isFirstRender(pictures) && !isFirstRender(picture)) {
      return null;
    }

    let displayed = this.state.displaySinglePicture && picture.length > 0 ? this.renderSinglePicture(picture) : this.renderAllPictures(pictures);

    return (<div className="Gallery">
      { displayed }
    </div>);
  }
}


export default connect(state => ({
  pictures: state.gallery.pictures,
  picture: state.gallery.picture
}), actions)(Gallery);
