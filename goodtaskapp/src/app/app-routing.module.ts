import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { TasklistComponent } from './tasklist/tasklist.component';

const routes: Routes = [

  // { path: '', component: TasklistComponent}
  // { path: 'filter', component: FilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
