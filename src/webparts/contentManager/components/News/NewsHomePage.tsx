import * as React from "react";
import styles from "../ContentManager.module.scss";
import pnp from "sp-pnp-js";

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
    return (
      <div>
        <h3>News</h3>
        {this.state.newsList.map(function(item: INews) {
          return (
            <div className={"ms-Grid-col ms-sm6 ms-md6 ms-lg4"}>
              <div className={styles.contentDiv}>
                <label className="ms-Label">{item.Title}</label>
                <br />
                <label className="ms-Label">{item.ShortDescription}</label>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
