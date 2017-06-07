import React from 'react';
import '../less/Slider.less';
import Arrows from './Arrows.js';
import ShowFlag from './ShowFlag.js';
import SilderLists from './SliderLists.js';
import SliderLists from "./SliderLists";
export default class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state = {pos:0};
    }

    turn(n){
        if(typeof n === "object"){
            n = arguments[1];
        }

        let pos = this.state.pos;
        pos+=n;

        if(pos > this.props.images.length){
            pos=1;
        }
        if(pos<0){
            pos = this.props.images.length-1;
        }
        this.setState({pos});
    }

    play(){
        this.timer = setInterval(()=>{
            this.turn(1);
        },this.props.interval*1000)
    }

    componentDidMount(){
        if(this.props.autoplay){
            this.play();
        }
    }

    render(){
        let images = this.props.images;
        let style={
            width:790*(images.length + 1),
            left:this.state.pos*-790
        };


        return (
            <div>
                <div className="wrapper" onMouseOver={()=>clearInterval(this.timer)} onMouseOut={()=>this.play()}>
                    <SliderLists style={style} ref={ref => this.slider = ref} images={this.props.images}/>
                    <Arrows turn={this.turn.bind(this)} arrows={this.props.arrows}/>
                    <ShowFlag images={this.props.images} pos={this.state.pos} turn={this.turn.bind(this)} showFlag={this.props.showFlag}/>
                </div>
                <botton onClick={(e)=>this.turn(e)} className="btn">stop</botton>
            </div>

        )

    }


}

