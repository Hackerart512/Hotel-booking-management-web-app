import './contactForm.css';
import { useState } from 'react';
import swal from 'sweetalert';


export default (ContactForm) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/contactus', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    })
    
    let json = await response.json();
    console.log(json);
    if (json.success) {
      swal("success", json)
    }
  }

  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  
  return (
    <>
      <div className="contactFormBody">
        {/* <h2>Get in Touch</h2> */}
        <div className='contactFormContainer'>
          <h4 className="contactFormHeading">Send a Message</h4>
          <form onSubmit={handleSubmit} method="POST" action="http://localhost:5000/contactus">
            {/* first row input */}
            <div className="firstRow">
              <div className="FirstRowDiv1">
                <label htmlFor="exampleInputFname">First Name</label>
                <input onChange={handleChange} className="ContactInput" id="exampleInputFname" type="text" name="Fname" />
              </div>
              <div className='firstRowdiv2'>
                <label htmlFor='exampleInputLname'>Last Name</label>
                <input onChange={handleChange} className="ContactInput" id="exampleInputLname" type="text" name="Lname" />
              </div>
            </div>

            <div className="secondRow">
              <div className="secondRowdiv1">
                <label htmlFor="exampleInputEmail">Email</label>
                <input onChange={handleChange} className="ContactInput" id="exampleInputEmail" type="email" name="email" />
              </div>
              <div className='secondRowdiv2'>
                <label htmlFor='exampleInputPhone'>Mobile</label>
                <input onChange={handleChange} className="ContactInput" id="exampleInputPhone" type="text" name="phoneNumber" />
              </div>
            </div>

            <div className='thirdRowdiv'>
              <label htmlFor='exampleInputTextarea'>Message</label>
              <textarea onChange={handleChange} className="ContactInput" type="textarea" id='exampleInputTextarea' rows="8" name="message" minLength={1} cols="50" />
            </div>

            <button type="submit" className="contactButton">Send</button>
          </form>
        </div>

        <div className="IfoMapContainer">
          <div className="ContactInfo">
            <h4 className="ContactInfoHeading">Contact Info</h4>
            <div className="iconePera">
              <p> <i class="icons1 fa-solid fa-location-dot" ></i>Cannaight Palace, New Delhi India</p>
              <p><i class="icons1 fa-solid fa-envelope"></i>pavanprajapat243@gmail.com</p>
              <p><i class="icons1 fa-solid fa-phone"></i> +91 987 654 3210</p>
            </div>

            <div className="SocialMediaIcon">
              <i class="icons fa-brands fa-facebook"></i>
              <i class="icons fa-brands fa-twitter"></i>
              <i class="icons fa-brands fa-linkedin"></i>
              <i class="icons fa-brands fa-instagram"></i>
            </div>
          </div>
          <div className='MapContainer'>
            {/* <iframe
                        src="https://maps.app.goo.gl/L"
                        width="300" height="300"
                        iframeborder="0"
                        areahidden="false"
                        tabIndex={0}>
                    </iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232156.54091464283!2d73.40948443065719!3d24.60831020484658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56550a14411%3A0xdbd8c28455b868b0!2z4KSJ4KSm4KSv4KSq4KWB4KSwLCDgpLDgpL7gpJzgpLjgpY3gpKXgpL7gpKg!5e0!3m2!1shi!2sin!4v1690704554393!5m2!1shi!2sin" width="100%" height="272" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

            </iframe>
          </div>
        </div>
      </div>
    </>
  )
}
