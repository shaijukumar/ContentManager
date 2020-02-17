import * as React from "react";
import styles from "./ContentManager.module.scss";
import { IContentManagerProps } from "./IContentManagerProps";
import { escape } from "@microsoft/sp-lodash-subset";

import { IGetlistitemsReactProps } from "./IGetlistitemsReactProps";
import GetlistitemsReact from "./Customer/GetlistitemsReact";

export default class ContentManager extends React.Component<
  IContentManagerProps,
  {}
> {
  public render(): React.ReactElement<IContentManagerProps> {
    return (
      <div className={styles.contentManager}>
        <div>
          <GetlistitemsReact description="123"></GetlistitemsReact>
        </div>
      </div>
    );
  }
}
