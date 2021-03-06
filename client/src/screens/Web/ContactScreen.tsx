import React from 'react'

import author1 from '../../assets/images/brad_traversy.jpg'
import author2 from '../../assets/images/zubin_pratap.jpg'
import author3 from '../../assets/images/victoria_drake.jpg'
import author4 from '../../assets/images/yazeed_bzadough.jpg'

const ContactScreen = () => {
    return (
        <div className="container-fluid px-0">
            <div className="mx-auto tm-content-container">
                <div className="row mt-3 mb-5 pb-3">
                    <div className="col-12">
                        <div className="mx-auto tm-about-text-container px-3">
                            <h2 className="tm-page-title mb-4 tm-text-primary">Contact our team</h2>
                            <p className="mb-4">
                                Integer sit amet odio id libero tincidunt dignissim in eget arcu. Aliquam tristique ut magna sit amet tincidunt. Sed tempor tellus nulla, molestie luctus lectus tincidunt id. You are <u>not allowed</u> to re-distribute the template ZIP file on any template collection website.
                            </p>
                            <p className="mb-4">Video Catalog is a free website template for your business. This is 100% free Bootstrap v4.4.1 layout. You can modify and adapt this template for your CMS websites. You can use it for commercial or non-commercial work. If you wish to suport <a rel="nofollow" target="_parent" href="https://templatemo.com" className="tm-text-primary">TemplateMo</a>, please contact us.</p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto pb-3 tm-about-text-container px-3">
                    <div className="row">
                        <div className="col-lg-6 mb-5">
                            <form id="contact-form" className="tm-contact-form">
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control rounded-0" placeholder="Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" className="form-control rounded-0" placeholder="Email" required />
                                </div>
                                <div className="form-group">
                                    <select className="form-control" id="contact-select" name="inquiry">
                                        <option value="-">Subject</option>
                                        <option value="sales">Sales &amp; Marketing</option>
                                        <option value="creative">Creative Design</option>
                                        <option value="uiux">UI / UX</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea rows={8} name="message" className="form-control rounded-0" placeholder="Message" required defaultValue={""} />
                                </div>
                                <div className="form-group mb-0">
                                    <button type="submit" className="btn btn-primary rounded-0 d-block ml-auto mr-0 tm-btn-animate tm-btn-submit tm-icon-submit"><span>Submit</span></button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <div className="mapouter mb-60">
                                <div className="gmap_canvas">
                                    <iframe width="100%" height={520} id="gmap_canvas" src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="parallax-window" id="tm-contact-img-2"></div>

            <div className="mx-auto tm-content-container mt-4 px-3 mb-3">
                <div className="row">
                    <div className="col-12">
                        <h2 className="tm-page-title mb-5 tm-text-primary">Testimonials</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 mb-5 pt-3">
                        <div className="media tm-testimonial">
                            <img className="mr-4 rounded-circle img-fluid" src={author1} alt="Generic placeholder image" height="200" width="200" />
                            <p className="media-body pt-3 tm-testimonial-text">
                                Vestibulum non lectus id lacus aliquet porttitor in non nulla. Aenean urna diam, finibys id lorem nec, feugiat convallis dolor. Integer aliquam, eros eget rutrum iaculis.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5 pt-3">
                        <div className="media tm-testimonial">
                            <img className="mr-4 rounded-circle img-fluid" src={author2} alt="Generic placeholder image" height="200" width="200"/>
                            <p className="media-body pt-3 tm-testimonial-text">
                                Maecenas et libero in eros laoreet finibus sed vitae diam. Etiam consetetur, nunc sed pretium elementum, diam erat fringilla tortor, placerat condimentum.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5 pt-3">
                        <div className="media tm-testimonial">
                            <img className="mr-4 rounded-circle img-fluid" src={author3} alt="Generic placeholder image" height="200" width="200"/>
                            <p className="media-body pt-3 tm-testimonial-text">
                                Aliquam tristique ut magna sit amet tincidunt. Sed tempor tellus nulla, molestie luctus lectus tincidunt id. Cras duismod leo a urna placerat, vel blandit turpis fermentum.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5 pt-3">
                        <div className="media tm-testimonial">
                            <img className="mr-4 rounded-circle img-fluid" src={author4} alt="Generic placeholder image" height="200" width="200"/>
                            <p className="media-body pt-3 tm-testimonial-text">
                                Nulla suscipit posuere lectus ut venenatis. Proin sed orci eget tellus euismod vulputate eu eu arcu. Etiam a bibendum lorem. Cura
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>

    )
}

export default ContactScreen