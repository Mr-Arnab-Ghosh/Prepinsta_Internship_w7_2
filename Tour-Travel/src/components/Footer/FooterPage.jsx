import React from 'react'  // by typing "rafce"
import "./FooterPage.css"

const FooterPage = () => {
  return (
    <>
        <div className="footer">
            <div className="top-row">
                <div>                   {/* left-column */}
                    <h1>ZTravel</h1>
                    <p>Choose your favorite destination</p>
                </div>
                <div>                   {/* right-column */}
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>

                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>

                    <a href="/">
                        <i className="fa-brands fa-behance-square"></i>
                    </a>

                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom-row">
                <div>                    {/* first-column */}
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div>                     {/* second-column */}
                    <h4>Community</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>                      {/* third-column */}
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>                      {/* fourth-column */}
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default FooterPage