import React from "react";

const AboutUs = () => {

return (
<section className="t-about-us">

    <div className="o-container o-container--about-us">
    <div className="o-row o-row--center-y">

    <div className="o-col o-col--md50 t-about-us__left">
        <div className="t-about-us__contnet">
        <h1 className="c-heading c-heading--level1 e-alignCenter">O nas</h1>
        <div className="c-icon-box__image e-alignCenter"></div>
        <p className="t-about-us__text e-alignCenter">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
        <div className="c-icon-box__signature"></div>
    </div>
    </div>
    
    <div className="o-col o-col--md50 t-about-us__right">
        <div className="t-about-us__image"></div>
    </div>
    
    </div>
    </div>
</section>
    )
}

export default AboutUs;