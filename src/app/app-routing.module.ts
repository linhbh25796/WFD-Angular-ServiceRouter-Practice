import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {TimelinesComponent} from './timelines/timelines.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {
    path: ' ',
    component: HomeComponent
  },
  {
    path: 'dictionary',
    component: DictionaryPageComponent,
    children: [
      {
        path: ':key',
        component: DictionaryDetailComponent
      }
    ]
  }, {
    path: 'timelines',
    component: TimelinesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
