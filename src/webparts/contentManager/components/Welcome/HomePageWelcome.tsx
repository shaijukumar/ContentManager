import * as React from "react";

import styles from "../ContentManager.module.scss"

import '../HomePageStyle.scss';

//import { Button } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';



import { escape } from "@microsoft/sp-lodash-subset";
import pnp from "sp-pnp-js";
//import { ClassCustomer } from "./Customer";
import { UserDetails, CUserDetails } from "../DataAccess/UserDetails";

import { IGetlistitemsReactProps } from "../IGetlistitemsReactProps";

export default class HomePageWelcome extends React.Component<
  IGetlistitemsReactProps,
  any
> {
    public constructor(props: IGetlistitemsReactProps, any) {
        super(props);
        this.state = {       
            currentUser: UserDetails
        };
    }

    public componentDidMount() {
        debugger;
        let data = new UserDetails();
        data.GetCurrentUserDetails().then(res => {
            this.setState({ currentUser: res });
            console.log(res);
        });
    }

    public render(): React.ReactElement<IGetlistitemsReactProps> {
        return (           
            <div className="welcomeWrapper">
              Welcome {this.state.currentUser.Title}
            </div>
        );
    }     
}