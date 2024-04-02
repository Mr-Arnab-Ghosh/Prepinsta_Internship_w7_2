import React from 'react'
import "./ContactForm.css"

function ContactForm() {
  return (
    <>
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form action="">
                <input type="text" name="name" placeholder="Enter Your Name"/>
                <input type="email" name="email" placeholder="Enter Your Email Address"/>
                <input type="text" name="subject" placeholder="Enter the Subject"/>
                <textarea name="message" rows="4" placeholder="Write your Message"></textarea>
                <button type="submit" className='btn_formSubmit'>Send Message</button>
            </form>
        </div>
    </>
  )
}

export default ContactForm