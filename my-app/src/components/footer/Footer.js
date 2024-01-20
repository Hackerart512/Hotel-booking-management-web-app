import './footer.css'
// import 'https://fontawesome.com/icons/facebook?f=brands&s=solid';
import React from 'react'

export default function footer() {

    const styles ={
         
    }
   
    
  return (
      <>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h3>company</h3>
                        <ul className="ul-footer">
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our survices</a></li>
                            <li><a href="#">primary policy</a></li>
                            <li><a href="#">affiliate</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>get help</h3>
                        <ul className="ul-footer">
                            <li><a href="#">fAQ</a></li>
                            <li><a href="#">shipping</a></li>
                            <li><a href="#">returns</a></li>
                            <li><a href="#">order statuc</a></li>
                            <li><a href="#">payment option</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>online shop</h3>
                        <ul className="ul-footer">
                            <li><a href="#">fAQ</a></li>
                            <li><a href="#">shipping</a></li>
                            <li><a href="#">returns</a></li>
                            <li><a href="#">order statuc</a></li>
                            <li><a href="#">payment option</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>follow us</h3>
                        <div className="social-links">
                              <a herf="#"><i className="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}
