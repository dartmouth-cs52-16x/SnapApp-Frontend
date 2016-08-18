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
      snapReady: 0,
    };

    this.onSubmit = this.onSubmit.bind(this);
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

  onDrop(files) {
    // const newArray = this.state.files.slice();
    console.log('Received files: ', files);
    // newArray.push(files);
    this.setState({
      files,
      snapReady: 1,
    });
  }


  onOpenClick() {
    this.refs.dropzone.open();
  }


  imageWasSet(event) {
    if (event.target.value !== '') {
      this.setState({
        pictureURL: event.target.value,
        snapReady: 1,
      });
    } else {
      this.setState({
        pictureURL: event.target.value,
        snapReady: 0,
      });
    }
  }


  render() {
    if (this.state.snapReady === 0) {
      // snap not ready to send
      return (
        <div className="NewSnap">
          <div id="ns-header">SEND A SNAP</div>
          <div className="ns-options">
            <div className="ns-icons">
              <div id="ns-snapshot">
                <i id="snapshot-icon" className="material-icons">add_a_photo</i>
              </div>

              <div id="ns-Dropzone">
                <Dropzone ref="dropzone" style="border: none" onDrop={this.onDrop} multiple={false}>
                  <i id="drop-zone-icon" className="material-icons">cloud_upload</i>
                </Dropzone>
              </div>
            </div>
          </div>
          {this.state.files.length > 0 ? <div className="pic-to-send">
            <div id="pts-img">{this.state.files.map((file) =>
              <img key={file.size} role="presentation" src={file.preview} width="500" />
            )}
            </div>
          </div> : null}
          <div id="ns-text-send">
            Send text (for testing): <input placeholder="Image Here!!!" onChange={this.imageWasSet} value={this.state.image} />
          </div>
        </div>
      );
    } else {
      // snap ready to send
      return (
        <div className="NewSnap">
          <div id="ns-header">SEND A SNAP</div>
          <div className="ns-options">

            <div id="ns-snapshot">
              <i id="snapshot-icon" className="material-icons">add_a_photo</i>
            </div>

            <div id="ns-Dropzone">
              <Dropzone ref="dropzone" style="border: none;" onDrop={this.onDrop} multiple={false}>
                <i id="drop-zone-icon" className="material-icons">cloud_upload</i>
              </Dropzone>
            </div>
          </div>
          {this.state.files.length > 0 ? <div className="pic-to-send">
            <div id="pts-img">{this.state.files.map((file) =>
              <img key={file.size} role="presentation" src={file.preview} width="300" />
            )}
            </div>
          </div> : null}
          <div id="ns-text-send">
            Send text (for testing): <input placeholder="Image Here!!!" value={this.state.image} onChange={this.imageWasSet} />
          </div>
          <div id="ns-submit">
            <div>
              <a onClick={this.onSubmit}>SEND</a>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(null, { createSnap })(CreateSnap);
