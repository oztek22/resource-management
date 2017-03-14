import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <!DOCTYPE html>
<html>
<head>
	<title> Add / Edit Expense </title>
	<!-- Compiled and minified CSS -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">
	<!-- Compiled and minified JavaScript -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>      
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col s12 m12 l12">
				<h3> Add/Edit Expense </h3>
			</div>
		</div>
		<div class="divider"></div>
		<div class="row">
			<form class="col s12">
				<div class="row">
					<div class="input-field col s6">
						<input placeholder="Particular" id="first_name" type="text" class="validate">
					</div>
				</div>
				<div class="row">
					<div class="input-field col s6">
						<input placeholder="Amount" id="amnt" type="number" class="validate" step="0.01" min="0">
					</div>
				</div>
			</form>
		</div>
		<div class="row">
			<div class="col s12 m8 l4">
				<p>
					<input name="group1" type="radio" id="income" />
					<label for="test1">Income</label>
				</p>
				<p>
					<input name="group1" type="radio" id="expense" />
					<label for="test2">Expense</label>
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col s12 m8 l4">
				<button class="btn waves-effect waves-light" type="submit" name="action">Submit
    				<i class="material-icons right">send</i>
				</button>
			</div>
		</div>
	</div>
</body>
</html>
  `,
})
export class AppComponent  { name = 'Angular'; }