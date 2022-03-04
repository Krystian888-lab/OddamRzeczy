import React from "react";
import ChooseButton from "./WhoWeHelp/ChooseButton";

import ListWithPagination from "./WhoWeHelp/ListWhithPagination";
import possibleChoices from './WhoWeHelp/helpChoices';

class WhoWeHelp extends React.Component {

    state = {
        currentChoose: possibleChoices.fundations
    }

    // choose list from helpChoices
handleClick = choice => this.setState({currentChoose: possibleChoices[choice]});

    // check if isActive, made for styling button, ChoseButton
isActive = choice => JSON.stringify(possibleChoices[choice]) === JSON.stringify(this.currentChoose);

render() {

return (
<section className="t-help">
<div className="o-container">
    <h1 className="c-heading c-heading--level1 e-alignCenter">Komu pomagamy</h1>
    <div className="c-icon-box__image"></div>

    <div className="t-help--switchts">
        
        <div className="o-row o-row--help">
        
        <div className="o-col o-col--lg33">
        <ChooseButton text={"Fundacjom"} choice={'fundations'} isActive={this.isActive('fundations')} onClick={(e) => this.handleClick(e)}  />
        </div>

        <div className="o-col o-col--lg33">    
        <ChooseButton text={"Organizacjom pozarządowym"} choice={'organizations'} isActive={this.isActive('organizations')} onClick={e => this.handleClick(e)}  />
        </div>

        <div className="o-col o-col--lg33">
        <ChooseButton text={"Lokalnym zbiórkom"} choice={'local'} isActive={this.isActive('local')} onClick={e => this.handleClick(e)} />
        </div>

        </div>
            <div className="t-help--intro-text e-alignCenter">{this.state.currentChoose.description}
            </div>


        <ListWithPagination list={this.state.currentChoose.items} />
    </div>  
    </div>
</section>
    )
}
}

export default WhoWeHelp;