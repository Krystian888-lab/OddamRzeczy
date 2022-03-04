import React from "react";
// import Button from "./Elements/Button/Button";

const FourSteps = () => {

 return (
  <section className="t-our-path">

   <div className="t-our-path--four-steps">
    <div className="o-row--badge">
     <h1 className="c-heading c-heading--level1 e-alignCenter">Wystarczą 4 proste kroki</h1>
     <div className="c-icon-box__image"></div>
    </div>

    <div className="o-container o-container--board">
     <div className="o-row o-row--four-steps">

      <div className="o-col o-col--md50 o-col--lg25">
       <div className="c-icon-box c-icon-box__item">
        <div className="c-icon-box__draft c-icon-box__shirt"></div>
        <h4 className="c-heading c-heading--level3 c-icon-box__letter">Wybierz rzeczy</h4>
        <hr className="c-icon-box__divider"></hr>
        <p className="c-icon-box__subtitle1 e-alignCenter">ubrania, zabawki, sprzęt i inne</p>

       </div>
      </div>

      <div className="o-col o-col--md50 o-col--lg25">
       <div className="c-icon-box c-icon-box__item">
        <div className="c-icon-box__draft c-icon-box__bag"></div>
        <h4 className="c-heading c-heading--level3 c-icon-box__letter">Spakuj je</h4>
        <hr className="c-icon-box__divider"></hr>
        <p className="c-icon-box__subtitle1 e-alignCenter">skorzystaj z worków na śmieci</p>

       </div>
      </div>

      <div className="o-col o-col--md50 o-col--lg25">
       <div className="c-icon-box c-icon-box__item">
        <div className="c-icon-box__draft c-icon-box__magnifier"></div>
        <h4 className="c-heading c-heading--level3 c-icon-box__letter e-alignCenter">Zdecyduj komu chcesz pomóc</h4>
        <hr className="c-icon-box__divider"></hr>
        <p className="c-icon-box__subtitle1 e-alignCenter">wybierz zaufane miejsce</p>

       </div>
      </div>

      <div className="o-col o-col--md50 o-col--lg25">
       <div className="c-icon-box c-icon-box__item">
        <div className="c-icon-box__draft c-icon-box__courier"></div>
        <h4 className="c-heading c-heading--level3 c-icon-box__letter">Zamów kuriera</h4>
        <hr className="c-icon-box__divider"></hr>
        <p className="c-icon-box__subtitle1 e-alignCenter">kurier przyjedzie w dogodnym terminie</p>

       </div>
      </div>

     </div>
    </div>

    <div className="o-row o-row--outlined">
     <div className="c-btn c-btn--root c-btn--outlined" url={"/logowanie"}>Oddaj <br /> rzeczy</div>
    </div>

   </div>
  </section>
 )
}

export default FourSteps;