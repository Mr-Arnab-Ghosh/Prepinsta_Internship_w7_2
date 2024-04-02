import React from 'react'   // by typing "rafce"
import Mountain1 from "../../../assets/1.webp"
import Mountain2 from "../../../assets/2.webp"
import Mountain3 from "../../../assets/3.webp"
import Mountain4 from "../../../assets/4.webp"
import "./Destination.css"
import DestinationsData from './DestinationsData'

const Destination = () => {
  return (
    <>
      <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>
            
            <DestinationsData
              class_name = "first-des"
              heading = "Taal Volcano, Batangas"
              text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eum blanditiis! Quos, est hic, harum ratione quisquam voluptatum aliquam, beatae cupiditate enim nam reiciendis molestias dolor laudantium officia perferendis voluptate ea ab ullam omnis eveniet labore! Dolor aspernatur expedita tempore, accusantium exercitationem soluta, amet alias nesciunt deleniti dolores quo odit!"
              img1 = {Mountain1}
              img2 = {Mountain2}
            />

            <DestinationsData
              class_name = "first-des-reverse"
              heading = "Mt. Daguldul, Batangas"
              text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eum blanditiis! Quos, est hic, harum ratione quisquam voluptatum aliquam, beatae cupiditate enim nam reiciendis molestias dolor laudantium officia perferendis voluptate ea ab ullam omnis eveniet labore! Dolor aspernatur expedita tempore, accusantium exercitationem soluta, amet alias nesciunt deleniti dolores quo odit!"
              img1 = {Mountain3}
              img2 = {Mountain4}
            />
      </div>
    </>
  )
}

export default Destination