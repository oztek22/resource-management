import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ExpenseTableComponent } from './expense-table.component';
import { LoginComponent} from './login.component';
import { AddBillComponent } from './add-bill.component'

@NgModule({
  imports:      [ BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'login', component: LoginComponent },
      { path: 'data', component: ExpenseTableComponent },
      { path: 'add', component: AddBillComponent },
      { path: 'update', component: AddBillComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]), ],
  declarations: [ AppComponent,
              ExpenseTableComponent,
              LoginComponent,
              AddBillComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
