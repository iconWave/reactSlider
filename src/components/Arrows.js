import React from 'react';

export default class Arrows extends React.Component{

    render(){
        if(this.props.arrows){
            return(
                <div className="arrows">
                    <span className="left" onClick={(e)=>this.props.turn(e,-1)}>&lt;</span>
                    <span className="right" onClick={(e)=>this.props.turn(e,1)}>&gt;</span>
                </div>
            )
        }

    }
}