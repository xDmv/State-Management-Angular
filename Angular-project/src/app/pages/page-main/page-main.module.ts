import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMainComponent } from './page-main/page-main.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PageMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
        [
          {
            path: '',
            component: PageMainComponent
          }
        ]
    )
  ]
})
export class PageMainModule { }
