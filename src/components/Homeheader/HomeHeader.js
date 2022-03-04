import React from "react";
// import Button from "../Elements/Button/Button";

const HomeHeader = () => {

return (
    <section className="t-our-root">

    <div className="o-container o-container--primary">
    <div className="o-row o-row--center-y">

    <div className="o-col o-col--md50 t-our-root__left"></div>

    <div className="o-col o-col--md50 t-our-root__right e-alignCenter">
        <div className="t-our-root__top">    
            <h1 className="c-heading c-heading--level1">Zacznij pomagać!</h1>
            <h1 className="c-heading c-heading--level1">Oddaj niechciane rzeczy w zaufane ręce</h1>
            <div className="c-icon-box__image"></div>

            <div className="t-our-root__buttons e-alignCenter">
                <div className="c-btn c-btn--root c-btn--twin" >Oddaj <br/> rzeczy</div>
                <div className="c-btn c-btn--root c-btn--twin" >Zorganizuj <br/> zbiórkę</div>
            </div>

        </div>
    </div>

    </div>
    </div>
    </section>
    )
}

export default HomeHeader