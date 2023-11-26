import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassbookComponent } from './passbook.component';

const routes: Routes = [
  {
    path: '',
    component: PassbookComponent,
    children: [
      {
        path: 'income',
        loadChildren: () => import('./income/income.module').then(m => m.IncomeModule)
      },
      {
        path: 'expenses',
        loadChildren: () => import('./expenses/expenses.module').then(m => m.ExpensesModule)
      },
      {
        path: 'savings',
        loadChildren: () => import('./savings/savings.module').then(m => m.SavingsModule)
      },
      {
        path: 'tax',
        loadChildren: () => import('./tax/tax.module').then(m => m.TaxModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassbookRoutingModule { }
