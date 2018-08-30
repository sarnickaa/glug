import React, { Component } from "react";
import axios from 'axios';
import { apiUrl } from '../server.js'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';


// Cloudinary Tutorial Used:
// https://cloudinary.com/blog/how_to_build_an_image_library_with_react_cloudinary


import "./Gallery.css";
// import MyModal from "./MyModal.js"

export default class Gallery extends Component {

  constructor(props) {
    // console.log(props)
    super(props)
    this.state = {
      gallery: [],
      email: this.props.getLoggedInEmail()
    }
  }



  componentDidMount() {
      console.log(this.state.email)

     // Request for images tagged with current users email
     axios.get(`https://res.cloudinary.com/dcegqfaze/image/list/${this.state.email}.json`)
         .then(res => {
             console.log(res.data.resources);
             this.setState({gallery: res.data.resources});
         });
 }

  uploadWidget() {
    let _this = this
// https://www.sitepoint.com/bind-javascripts-this-keyword-react/
// must be aliased at this point because openUploadWidget takes an annoymous callback that would change the context of 'this'

    // https://stackoverflow.com/questions/47287916/cloudinary-widget-use-in-react
      window.cloudinary.openUploadWidget({ cloud_name: 'dcegqfaze', upload_preset: 'esunn7gq', tags:[`${this.state.email}`], theme: 'minimal'},
          function(error, result) {
              console.log(result);
              if (result === undefined) {
                console.log('error!!')
              } else {
              _this.setState({gallery: _this.state.gallery.concat(result)})
            }
          });
  }



  render() {
    return (
      <div>
        <h1>My Wines</h1>
        <div className="button-div">
          <Button onClick={this.uploadWidget.bind(this)} id="upload-button">Add Image</Button>
        </div>
        <div className="gallery">
          <CloudinaryContext cloudName="dcegqfaze">
              {this.state.gallery.map(data => {
                return (
                  <div className="responsive" key={data.public_id}>
                    <div className="img">
                      <a target="_blank" href={`https://res.cloudinary.com/dcegqfaze/image/upload/${data.public_id}.jpg`}>
                        <Image publicId={data.public_id}>
                          <Transformation
                          crop="fit"
                          width="300"
                          height="300"
                          dpr="auto"
                          responsive_placeholder="blank" />
                        </Image>
                      </a>
                    <div className="desc">Created at {data.created_at}</div>
                    </div>
                  </div>
                        )
                          })
                            }
            </CloudinaryContext>
          </div>


      </div>
    );
  }
}


// export default WineForm
