import React, { Component } from 'react';
import { createSnap } from '../actions/index.js';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';


class CreateSnap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pictureURL: '',
      files: [],
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.imageWasSet = this.imageWasSet.bind(this);
    this.onOpenClick = this.onOpenClick.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onSubmit() {
    let pictureURL;
    if (!this.state.pictureURL) {
      pictureURL = 'No Image';
    } else {
      pictureURL = this.state.pictureURL;
    }
    const sentFrom = 'fromUserID';
    const sentTo = 'toUserID';
    this.props.createSnap({ pictureURL, sentFrom, sentTo });
  }

  onCancel() {
    browserHistory.push('/');
  }

  onDrop(files) {
    // const newArray = this.state.files.slice();
    console.log('Received files: ', files);
    // newArray.push(files);
    this.setState({
      files,
    });
  }


  onOpenClick() {
    this.refs.dropzone.open();
  }


  imageWasSet(event) {
    this.setState({
      pictureURL: event.target.value,
    });
  }


  render() {
    return (
      <div className="NewSnap">
        <div id="header">
          <div>Send A Snap!!!</div>
          <button id="cancel" onClick={this.onCancel}>Cancel</button>
        </div>

        <div id="image">
          Upload Image: <input placeholder="Image Here!!!" value={this.state.image} onChange={this.imageWasSet} />
        </div>

        <div id="submit">
          <button onClick={this.onSubmit}>Submit</button>
        </div>

        <div id="Dropzone">
          <Dropzone ref="dropzone" onDrop={this.onDrop} multiple={false}>
            <div>Click here to add files.</div>
          </Dropzone>
          <button type="button" onClick={this.onOpenClick}>
            Select an image to send
          </button>

          {this.state.files.length > 0 ? <div>
            <h2>Sending {this.state.files.length} file...</h2>
            <div>{this.state.files.map((file) =>
              <img key={file.size} role="presentation" src={file.preview} width="300" />
            )}
            </div>
          </div> : null}

        </div>

      </div>
    );
  }
}

export default connect(null, { createSnap })(CreateSnap);
