import React, { Component } from 'react'
import "./Destination.css"
import Mountain1 from "../../../assets/1.jpg"
import Mountain2 from "../../../assets/2.jpg"
import Mountain3 from "../../../assets/3.jpg"
import Mountain4 from "../../../assets/4.jpg"

class DestinationsData extends Component {
    render() {
        return (
            <>
                <div className="first-des">
                    <div className="des-text">
                        <h2>Taal Volcano, Batangas </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eum blanditiis! Quos, est hic, harum ratione quisquam voluptatum aliquam, beatae cupiditate enim nam reiciendis molestias dolor laudantium officia perferendis voluptate ea ab ullam omnis eveniet labore! Dolor aspernatur expedita tempore, accusantium exercitationem soluta, amet alias nesciunt deleniti dolores quo odit!</p>
                    </div>

                    <div className="image">
                        <img src={Mountain1} alt="firstImg1" />
                        <img src={Mountain2} alt="firstImg2" />
                    </div>
                </div>
            </>
        )
    }
}

export default DestinationsData