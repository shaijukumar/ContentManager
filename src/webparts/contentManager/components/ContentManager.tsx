import * as React from "react";
import styles from "./ContentManager.module.scss";
import { IContentManagerProps } from "./IContentManagerProps";
import { escape } from "@microsoft/sp-lodash-subset";

import { IGetlistitemsReactProps } from "./IGetlistitemsReactProps";
import GetlistitemsReact from "./Customer/GetlistitemsReact";

import NewsHomePage from "./News/NewsHomePage";
import HomePageWelcome from "./Welcome/HomePageWelcome";

export default class ContentManager extends React.Component<
  IContentManagerProps,
  {}
> {
  public render(): React.ReactElement<IContentManagerProps> {
    return (
      <section>
        <HomePageWelcome description="Home page news"></HomePageWelcome>
        <NewsHomePage description="Home page news"></NewsHomePage>
      </section> 
    );
  }
}
