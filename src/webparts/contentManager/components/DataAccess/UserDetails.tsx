import pnp from "sp-pnp-js";

export interface IUserDetails {
    Id:number;
    LoginName:string;
    Title: string;
    Email: string; 
}
  
export class CUserDetails {
    Id:number;
    LoginName:string;
    Title: string;
    Email: string;      
  }

  
export class UserDetails {
    
    GetCurrentUserDetails = function(): Promise<CUserDetails> {
        return new Promise(resolve => {     
            pnp.sp.web.currentUser
              .get()
              .then( (u : UserDetails ) => {
                debugger;
                let user = new CUserDetails();                
                user.Id = u["Id"];
                user.Title = u["Title"];
                user.Email = u["Email"];               
                resolve(user);
              });
          });
    }
}