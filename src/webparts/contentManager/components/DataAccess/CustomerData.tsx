import pnp from "sp-pnp-js";

export interface ICustomer {
    Id:number;
    LoginName:string;
    Title: string;
    Email: string; 
}
  
export class CCustomer {
    Id:number;
    LoginName:string;
    Title: string;
    Email: string;    
    
    constructor(item: ICustomer) {
        //this.Title = item.Title;
        
      }

  }

  
  export class CustomerData {

    GetList = function(NewsCount: number): Promise<CCustomer[]> {
      //debugger;
      return new Promise(resolve => {     
        pnp.sp.web.lists
          .getByTitle(`Customer`)
          .items.get()
          .then(response => {
            let newsList = response.map(item => new CCustomer(item));
            resolve(newsList);
          });
      });
    };
  }