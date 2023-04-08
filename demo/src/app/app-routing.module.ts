import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryViewComponent } from './summary-view/summary-view.component';
import { DetailsViewComponent } from './details-view/details-view.component';

const routes: Routes = [
  { path: '', component: SummaryViewComponent },
  { path: 'detailview', component: DetailsViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
