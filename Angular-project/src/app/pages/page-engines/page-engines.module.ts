import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEnginesComponent } from './page-engines/page-engines.component';
import { RouterModule } from '@angular/router';
import { ItemTableComponent } from './components/item-table/item-table.component';


@NgModule({
  declarations: [
    PageEnginesComponent,
    ItemTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
        [
          {
            path: '',
            component: PageEnginesComponent
          }
        ]
    )
  ],
  exports: [
      ItemTableComponent
  ]
})
export class PageEnginesModule { }
