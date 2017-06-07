import React from 'react';

export default class SliderLists extends React.Component{

    render(){
       let {style,images}= this.props;
       let image = JSON.parse(JSON.stringify(images[0]));
        return(
            <ul className="sliders" style={style}>
                {
                    images.map((image,index)=>(
                        <li className="slider" key={index}>
                            <img src={image.src} alt="" />
                        </li>

                    ))
                }
                <li className="slider">
                    <img src={image.src} alt="" />
                </li>
            </ul>
        )
    }
}