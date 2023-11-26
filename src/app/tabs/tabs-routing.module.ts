import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'user',
    component: TabsPage,
    children: [
      {
        path: 'passbook',
        loadChildren: () => import('../passbook/passbook.module').then(m => m.PassbookModule)
      },
      {
        path: 'info',
        loadChildren: () => import('../info/info.module').then(m => m.InfoModule)
      },
      {
        path: 'calender',
        loadChildren: () => import('../calender/calender.module').then(m => m.CalenderModule)
      },
      {
        path: '',
        redirectTo: '/user/passbook',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/user/passbook',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
