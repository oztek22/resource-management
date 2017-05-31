import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'app/expenseTable.html',
})
export class ExpenseTableComponent implements OnInit {

	ngOnInit(){
	}

	constructor(private router: Router){

	}
}
