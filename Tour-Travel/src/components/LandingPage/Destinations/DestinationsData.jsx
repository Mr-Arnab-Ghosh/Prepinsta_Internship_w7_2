import React, { Component } from 'react'
import "./Destination.css"

class DestinationsData extends Component {
    render() {
        return (
            <>
                <div className={this.props.class_name}>
                    <div className="des-text">
                        <h2>{this.props.heading}</h2>
                        <p>{this.props.text}</p>
                    </div>

                    <div className="image">
                        <img src={this.props.img1} alt="firstImg1" />
                        <img src={this.props.img2} alt="firstImg2" />
                    </div>
                </div>
            </>
        )
    }
}

export default DestinationsData