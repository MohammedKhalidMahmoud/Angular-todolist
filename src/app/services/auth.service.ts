import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })


export class AuthService {
  constructor(private router: Router){
    
  }
  loggedIn= false;
  role='';

  isLoggedIn(){
    if(localStorage.getItem('role')){
      return true;
    }
    return false;
  }

  login(role: string){
    if(role==='admin' || role==='user'){
      this.loggedIn= true;
      localStorage.setItem('role', role)
      this.router.navigate([''])
    }
    
  }


  logout(){
    this.loggedIn= false;
    localStorage.removeItem('role');
    this.router.navigate(['/role'])
  }
}
