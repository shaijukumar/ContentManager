import pnp from "sp-pnp-js";
//import { ClassCustomer } from "../Customer/Customer";

import { INews } from "../News/INews";
import { CNews } from "../News/CNews";

export class NewsData {

  GetTopNewsList = function(NewsCount: number): Promise<CNews[]> {
    //debugger;
    return new Promise(resolve => {     
      pnp.sp.web.lists
        .getByTitle(`PortalNews`)
        .items.get()
        .then(response => {
          let newsList = response.map(item => new CNews(item));
          resolve(newsList);
        });
    });
  };
}
