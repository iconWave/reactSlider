import React from 'react';

export default class ShowFlag extends React.Component{
    render(){
        let images = this.props.images;
        if(this.props.showFlag){
            return(
                <div className="showFlag">
                    {
                        images.map((image,index)=>(
                            <span key={index} className={"flag " + (((this.props.pos === index && this.props.pos < images.length)||(this.props.pos === images.length && index === 0)) ? 'active' : '') }   onClick={()=>this.props.turn(index - this.props.pos)}></span>
                        ))
                    }
                </div>
            )
        }

    }
}