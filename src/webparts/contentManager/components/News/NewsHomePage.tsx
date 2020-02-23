import * as React from "react";
import styles from "../ContentManager.module.scss";
import pnp from "sp-pnp-js";

import Slider from "react-slick";
//import "slick-carousel\slick\slick.scss"; 
//import "slick-carousel\slick\slick-theme.less";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IGetlistitemsReactProps } from "../IGetlistitemsReactProps";

import { INews } from "./INews";
import { CNews } from "./CNews";
import { NewsData } from "../DataAccess/NewsData";

export default class GetlistitemsReact extends React.Component<
  IGetlistitemsReactProps,
  any
> {
  public constructor(props: IGetlistitemsReactProps, any) {
    super(props);
    this.state = {
      newsList: []
    };

    
  }

  public componentDidMount() {
    let data = new NewsData();
    data.GetTopNewsList(10).then(res => {
      this.setState({ newsList: res });
      console.log(res);
    });
  }
 
  public render(): React.ReactElement<IGetlistitemsReactProps> {


 


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
 
    return (

      <div className="testcr">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>Shaiju Test 123</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
      


    );
  }
}
