import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TourComponent } from './tour/tour.component';
import { BlogComponent } from './blog/blog.component';
import { DocumentComponent } from './document/document.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tour', component: TourComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'document', component: DocumentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
