import * as React from "react";

import styles from "../ContentManager.module.scss";
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { escape } from "@microsoft/sp-lodash-subset";
import pnp from "sp-pnp-js";
//import { ClassCustomer } from "./Customer";
//import { ISPListCustomerItem } from "./Customer";

import { IGetlistitemsReactProps } from "../IGetlistitemsReactProps";

export default class HomePageWelcome extends React.Component<
  IGetlistitemsReactProps,
  any
> {
    public constructor(props: IGetlistitemsReactProps, any) {
        super(props);
        this.state = {       
            test:''
        };
    }

    public render(): React.ReactElement<IGetlistitemsReactProps> {
        return (
            <div>
                <Button color="danger">Danger!</Button>
            </div>
    
        );
    }

    


}