import React, { Component } from 'react';
import { createSnap } from '../actions/index.js';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import Webcam from 'react-webcam';
/* adapted from https://www.npmjs.com/package/webcam-capture */
/* webcam!! */

class CreateSnap extends Component {
  constructor(props) {
    super(props);

    this.camera = null;

    this.state = {
      caption: '',
      files: [],
      usingWebcam: 0,
      snapReady: 0,
      pic: [],
    };

    this.resetPage = this.resetPage.bind(this);
    this.snapshot = this.snapshot.bind(this);
    this.choseWebcam = this.choseWebcam.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.imageWasSet = this.imageWasSet.bind(this);
    this.onOpenClick = this.onOpenClick.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.retakePic = this.retakePic.bind(this);
  }

  onSubmit() {
    let pictureURL;
    if (!this.state.caption) {
      pictureURL = 'No Image';
    } else {
      pictureURL = this.state.caption;
    }
    const sentFrom = 'fromUserID';
    const sentTo = 'toUserID';
    this.props.createSnap({ pictureURL, sentFrom, sentTo });
  }

  onDrop(files) {
    // const newArray = this.state.files.slice();
    console.log('Received files: ', files);
    // newArray.push(files);
    console.log('first is ', files[0]);
    this.setState({
      pic: files[0],
      usingWebcam: 0,
      snapReady: 1,
    });
  }


  onOpenClick() {
    this.refs.dropzone.open();
  }

  retakePic() {
    this.setState({
      snapReady: 0,
      usingWebcam: 1,
    });
  }

  choseWebcam() {
    this.setState({
      usingWebcam: 1,
    });
  }

  snapshot() {
    const newPic = this.refs.webcam.getScreenshot();
    this.setState({
      usingWebcam: 1,
      snapReady: 1,
      pic: newPic,
    });
  }

  imageWasSet(event) {
    this.setState({
      caption: event.target.value,
    });
  }

  resetPage() {
    this.setState({
      caption: '',
      files: [],
      usingWebcam: 0,
      snapReady: 0,
    });
  }

  render() {
    if (this.state.snapReady === 0) {
      // snap not ready to send
      if (this.state.usingWebcam === 1) {
        // using webcam
        return (
          <div className="NewSnap">
            <div id="ns-header">SEND A SNAP</div>
            <div onClick={this.resetPage} id="ns-reset-div">
              <i className="material-icons">replay</i>
              <p>RESET</p>
            </div>
            <h4>PRESS PHOTO TO CAPTURE</h4>
            <div className="pic-to-send" onClick={this.snapshot}>
              <Webcam ref="webcam" />
            </div>
          </div>
        );
      } else {
        // not using webcam
        return (
          <div className="NewSnap">
            <div id="ns-header">SEND A SNAP</div>
            <div className="ns-options">
              <div className="ns-icons">
                <div id="ns-snapshot">
                  <i id="snapshot-icon" onClick={this.choseWebcam} className="material-icons">add_a_photo</i>
                </div>

                <div id="ns-Dropzone">
                  <Dropzone ref="dropzone" style="border: none" onDrop={this.onDrop} multiple={false}>
                    <i id="drop-zone-icon" className="material-icons">cloud_upload</i>
                  </Dropzone>
                </div>
              </div>
            </div>
          </div>
        );
      }
    } else {
      // snap ready to send
      if (this.state.usingWebcam === 1) {
        // using webcam
        return (
          <div className="NewSnap">
            <div id="ns-header">SEND A SNAP</div>
            <div onClick={this.resetPage} id="ns-reset-div">
              <i className="material-icons">replay</i>
              <p>RESET</p>
            </div>
            <h4>PRESS PHOTO TO RETAKE</h4>
            <div className="pic-to-send" onClick={this.retakePic}>
              {this.state.pic ? <img alt="null" src={this.state.pic} /> : null}
            </div>
            <div id="ns-text-outer">
              <div id="ns-text-send">
                Add a caption: <input id="pic-to-send-caption" placeholder="" value={this.state.caption} onChange={this.imageWasSet} /> <span>*optional</span>
              </div>
            </div>
            <div id="ns-submit">
              <div>
                <a onClick={this.onSubmit}>SEND</a>
              </div>
            </div>
          </div>
        );
      } else {
        // using upload
        return (
          <div className="NewSnap">
            <div id="ns-header">SEND A SNAP</div>
            <div onClick={this.resetPage} id="ns-reset-div">
              <i className="material-icons">replay</i>
              <p>RESET</p>
            </div>
            <div className="pic-to-send">
              {this.state.pic ? <img alt="null" src={this.state.pic.preview} /> : null}
            </div>
            <div id="ns-text-outer">
              <div id="ns-text-send">
                Add a caption: <input id="pic-to-send-caption" placeholder="" value={this.state.caption} onChange={this.imageWasSet} /> <span>*optional</span>
              </div>
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
}

export default connect(null, { createSnap })(CreateSnap);
