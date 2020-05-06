import React from 'react';
import home_redandblue_bkcgrnd from '../images/home_redandblue_bkcgrnd.jpg'
import './Home.css'
import { Route, BrowserRouter as Router, Link, Switch, } from 'react-router-dom';

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            imageContainerArr: [
                <img src={'https://i.pinimg.com/originals/7e/e3/4e/7ee34e7030a3ef6b1ece2f4b784ac205.jpg'}/>,
                <img src={'https://s1.cdn.autoevolution.com/images/news/2020-bmw-3-series-rendered-with-race-car-concept-kit-132092_1.jpg'}/>,
                <img src={'https://ae01.alicdn.com/kf/Hed64be684083437a87d687a269c44cb00/Creative-Concept-Simple-Watches-Men-Cool-Street-Brand-Clock-for-YOUNG-2020-New-Trendy-Wristwatch-Waterproof.jpg'}/>,
                <img src={'https://uk.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-run-away-trainer-shoes--AD9U1ASC02_PM1_Side%20view.jpg'}/>,
                <img src={'https://s7d1.scene7.com/is/image/BHLDN/54523386_011_d?$pdpmain$'}/>,
                <img src={'https://media.karousell.com/media/photos/products/2017/06/08/custom_diamond_cartier_sunglasses_1496896043_df582584.jpg'}/>,

            ],
        }
    }


    render(){
        let image = this.state.imageContainerArr;
        const imagesMap = image.map;
    return(
        <div>
            <h1 className="hmpg"> Home Page  </h1>
                <div>
                    <img src={ home_redandblue_bkcgrnd } className="home-background" alt="blue-red" /> {image} 
                    <p className="image-container"> </p>
                    </div>
                    <div  >
                </div>
        </div>
        )
    }
}

 
export default Home;
 