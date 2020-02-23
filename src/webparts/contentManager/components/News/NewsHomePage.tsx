import * as React from "react";
import styles from "../ContentManager.module.scss";
import pnp from "sp-pnp-js";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      slidesToShow: 2,
      slidesToScroll: 1
    };
 
    return (

      <div>


      <div className="announcements">
        <div className="well" >Basic Well</div>
      

        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>Shaiju Test 1233</h3>
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

      <div>
        
        
      <table className="table">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr  className="danger">
              <td>  <button type="button" className="btn btn-danger">Danger 123</button></td>
              <td>Defaultson</td>
              <td>def@somemail.com</td>
            </tr>      
            <tr className="success">
              <td>
              <button type="button" className="btn btn-labeled btn-success">
                <span className="btn-label">
                  success1<i className="glyphicon glyphicon-earphone">3</i> 2
                </span>
              </button>
              </td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr className="danger">
              <td>Danger</td>
              <td>Moe</td>
              <td>mary@example.com</td>
            </tr>
            <tr className="info">
              <td>Info</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
            <tr className="warning">
              <td>Warning</td>
              <td>Refs</td>
              <td>bo@example.com</td>
            </tr>
            <tr className="active">
              <td>Active</td>
              <td>Activeson</td>
              <td>act@example.com</td>
            </tr>
          </tbody>
          </table>
      
      </div>
      
      </div>

    );
  }
}
