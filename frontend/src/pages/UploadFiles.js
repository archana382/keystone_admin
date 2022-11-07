import React, { Component } from 'react';
import SideBar from "./SideBar"
import "./upload.css"

export default class FilesUploadComponent extends Component {
    render() {
        return (
            
            <div className="container">
                <SideBar/>
                <div className="upload">
                    <form>
                        <h5>File Upload</h5>
                        <div className="form-group">
                            <input type="file" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}