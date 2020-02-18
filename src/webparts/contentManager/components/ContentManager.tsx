import * as React from "react";
import styles from "./ContentManager.module.scss";
import { IContentManagerProps } from "./IContentManagerProps";
import { escape } from "@microsoft/sp-lodash-subset";

import { IGetlistitemsReactProps } from "./IGetlistitemsReactProps";
import GetlistitemsReact from "./Customer/GetlistitemsReact";

import NewsHomePage from "./News/NewsHomePage";

export default class ContentManager extends React.Component<
  IContentManagerProps,
  {}
> {
  public render(): React.ReactElement<IContentManagerProps> {
    return (
      <div className={styles.contentManager}>
        <div>
          <NewsHomePage description="123"></NewsHomePage>
        </div>
      </div>
    );
  }
}
