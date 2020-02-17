import * as React from "react";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import pnp from "sp-pnp-js";
import { escape } from "@microsoft/sp-lodash-subset";

import styles from "../ContentManager.module.scss";

export interface IGetlistitemsReactProps {
  description: string;
}

export interface ISPListCustomerItem {
  Title: string;
  FirstName: string;
  LastName: string;
}

export class ClassCustomer {
  Title: string;
  FirstName: string;
  LastName: string;

  constructor(item: ISPListCustomerItem) {
    this.Title = item.Title;
    this.FirstName = item.FirstName;
    this.LastName = item.LastName;
  }
}

/*
export interface ISPListCustomerItem {
  Title: string;
  FirstName: string;
  LastName: string;
}

export interface ISPListCustomers {
  value: ISPListCustomerItem[];
}
*/
export class Customer extends React.Component {
  public constructor(props: IGetlistitemsReactProps, any) {
    super(props);

    this.state = {
      items: [],
      test: "123"
    };
  }

  public render(): React.ReactElement<IGetlistitemsReactProps> {
    return (
      <div className={styles.contentManager}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={"ms-Grid"}>
                <div className={"ms-Grid-row"}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  public componentDidMount() {
    debugger;
    this._getListCustomerData();
  }

  private test() {
    return <h2>From Test</h2>;
  }

  private _getListCustomerData(): void {
    pnp.sp.web.lists
      .getByTitle(`Customer`)
      .items.get()
      .then(response => {
        let customerCollection = response.map(item => new ClassCustomer(item));
        this.setState({ items: customerCollection });
      });
  }

  /*
  private _getListCustomerData(): Promise<ISPListCustomers> {
    debugger;
    return this.context.spHttpClient
      .get(
        this.context.pageContext.web.absoluteUrl +
          `/_api/web/lists/GetByTitle('Customer')/Items`,
        SPHttpClient.configurations.v1
      )
      .then((responseListCustomer: SPHttpClientResponse) => {
        debugger;
        return responseListCustomer.json();
      });
  }

  private _renderListCustomer(items: ISPListCustomerItem[]): void {
    let html: string = `<table width='100%' border=1>`;
    html += `<thead><th>ID</th><th>Title</th><th>FirstName</th><th>Type</th><th>LastName</th></thead><tbody>`;
    debugger;
    items.forEach((item: ISPListCustomerItem) => {
      html += `<tr><td>${item.Title}</td>
                    <td>${item.FirstName}</td>
                    <td>${item.LastName}</td>                    
                    </tr>`;
    });
    html += `</tbody></table>`;
  }
*/
}
