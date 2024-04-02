import React from 'react'   // by typing "rfce"
import "./Trip.css"
import TripData from './TripData'
import TripImg1 from "../../../assets/5.webp"
import TripImg2 from "../../../assets/8.webp"
import TripImg3 from "../../../assets/6.webp"

function Trip()  {
  return (
    <>
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps</p>
            <div className="tripcard">
                <TripData
                    img = {TripImg1}
                    heading = "Trip in Indonesia"
                    text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio blanditiis ab illo iste ipsum expedita hic vitae nostrum error dolore iusto libero, cum sunt ad magnam amet earum laborum maiores?"
                />

                <TripData
                    img = {TripImg2}
                    heading = "Trip in Malaysia"
                    text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio blanditiis ab illo iste ipsum expedita hic vitae nostrum error dolore iusto libero, cum sunt ad magnam amet earum laborum maiores?"
                />

                <TripData
                    img = {TripImg3}
                    heading = "Trip in France"
                    text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio blanditiis ab illo iste ipsum expedita hic vitae nostrum error dolore iusto libero, cum sunt ad magnam amet earum laborum maiores?"
                />
            </div>
        </div>
    </>
  )
}

export default Trip