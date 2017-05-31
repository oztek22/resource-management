import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
  <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {

	ngOnInit(){
		if(localStorage.getItem('socUser')){
			// this.router.navigate(['/data']);
		}
		else{
			localStorage.setItem('socUser', JSON.stringify({ username: 'username', token: 'token' }));
			this.router.navigate(['/login']);
		}
	}

	constructor(private router: Router){

	}
}
