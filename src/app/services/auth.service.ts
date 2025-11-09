import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private router: Router){
    
  }
  loggedIn= false;
  isLoggedIn(){
    return this.isLoggedIn;
  }

  login(role: string){
    if(role==='admin' || role==='user'){
      this.loggedIn= true;
      this.router.navigate([''])
    }
  }


  logout(){
    this.loggedIn= false;
  }
}
