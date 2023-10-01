import './contact.css'
export default function Contact() {
    return (
        <section className="contact_section">
            <div className="portfolio_container">
                <div className="contact_wrapper">
                    <div className="contact_heading">
                        <h2>Contact</h2>
                    </div>
                    <div className='img_form_container'>
                        <div className='contact_img_container'>
                            <img src='/contact_img.jpg' alt='contact_img' />
                        </div>
                        <div className='contact_form_container'>
                            <form action="/">
                                <label htmlFor="fname">First Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                                <label htmlFor="lname">Last Name</label>
                                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                                <label htmlFor="country">Country</label>
                                <select id="country" name="country">
                                    <option value="australia">Australia</option>
                                    <option value="canada">Canada</option>
                                    <option value="usa">USA</option>
                                </select>

                                <label htmlFor="subject">Subject</label>
                                <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>

                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}