import React from 'react'
import Lottie from 'lottie-react-web'

import welcome from '../../assets/animated/welcome.json'
import environment from '../../assets/animated/environment.json'
import online from '../../assets/animated/learn-online.json'
import products from '../../assets/animated/real-product.json'
import certificated from '../../assets/animated/certificated.json'
import internship from '../../assets/animated/internship.json'

const AboutScreen = () => {
    return (
        <div className="container-fluid px-0">
            <div className="mx-auto tm-content-container">
                <div className="row mt-3 mb-5 pb-3">
                    <div className="col-12">
                        <div className="mx-auto tm-about-text-container px-3">
                            <h2 className="tm-page-title mb-4 tm-text-primary">About the Courses Catalog</h2>
                            <p className="mb-4">Courses Catalog is free courses about web development for beginner. This Bootstrap v4.4.1 website template is 100% free download for everyone. You can modify and expand this template for your CMS websites. You can use it for commercial or non-commercial work. If you wish to support <a href="https://templatemo.com" className="tm-text-primary">TemplateMo</a>, please contact us.</p>
                            <p className="mb-4">You are <u>not allowed</u> to re-distribute the template ZIP file on any template collection website.</p>
                            <p className="mb-4">Vivamus sit amet justo sed erat iaculis consequat. Nulla suscipit posuere lectus ut venenatis. Proin sed orci eget tellus euismod vulputate eu eu arcu. Etiam a bibendum lorem. Curabitur ac bibendum odio. Vivamus euismod dui mauris, ut tincidunt mi congue quis.</p>
                            <p className="mb-0">Phasellus luctus orci dolor, a luctus massa tincidunt vitae. Integer sit amet odio id libero tincidunt dignissim in eget arcu. Aliquam tristique ut magna sit amet tincidunt. Sed tempor tellus nulla, molestie luctus lectus tincidunt id. Cras duismod leo a urna placerat, vel blandit turpis fermentum.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="parallax-window" id="tm-about-img-2"></div>

            <div className="mx-auto tm-content-container mt-4 px-3">
                <div className="row tm-catalog-item-list mb-4">
                    <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                        <div className="tm-bg-gray p-4">
                            <Lottie options={{ animationData: welcome }} height="50" />
                            <h3 className="tm-text-primary mb-3">Cras convallis mollis justo</h3>
                            <p>Sed dapibus vulputate diam nec hendrerit. In libero purus, interdum vitae purus nec, convallis sollicitudin nunc. Curabitur maximus maximus ex a scelerisque.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                        <div className="tm-bg-gray p-4">
                            <Lottie options={{ animationData: environment }} height="70" />
                            <h3 className="tm-text-primary mb-3">Nullam dictum pretium</h3>
                            <p>Quisque vestibulum lectus eros, tincidunt ultricies ante euismod non. Ut sed consequat est, quis lobortis lorem. Nullam dictum pretium mauris eu aliquam.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                        <div className="tm-bg-gray p-4">
                            <Lottie options={{ animationData: online }} height="60" />
                            <h3 className="tm-text-primary mb-3">Etiam in quam dolor</h3>
                            <p>Aliquam in congue diam, non tincidunt ligula. Suspendisse facilisis elit eget quam semper aliquet. Donec ut purus aliquet, imperdiet lacus id, faucibus lectus.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                        <div className="tm-bg-gray p-4">
                            <Lottie options={{ animationData: products }} height="50" />
                            <h3 className="tm-text-primary mb-3">Duis ornare felis nec orci</h3>
                            <p>Nam dapibus lectus ultricies neque feugiat eleifend. Donec ornare dolor suscipit metus hendrerit, vel malesuada neque mattis. Fusce posuere cursus mattis.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                        <div className="tm-bg-gray p-4">
                            <Lottie options={{ animationData: certificated }} height="50" />
                            <h3 className="tm-text-primary mb-3">Class aptent taciti sociosqu</h3>
                            <p>Maecenas et libero in eros laoreet finibus sed vitae diam. Etiam consetetur, nunc sed pretium elementum, diam erat fringilla tortor, placerat condimentum.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                        <div className="tm-bg-gray p-4">
                            <Lottie options={{ animationData: internship }} height="50" />
                            <h3 className="tm-text-primary mb-3">Suspendisse ut malesuada</h3>
                            <p>Vestibulum non lectus id lacus aliquet porttitor in non nulla. Aenean urna diam, finibys id lorem nec, feugiat convallis dolor. Integer aliquam, eros eget rutrum iaculis.</p>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="parallax-window" id="tm-about-img-3"></div>

        </div>
    )
}

export default AboutScreen