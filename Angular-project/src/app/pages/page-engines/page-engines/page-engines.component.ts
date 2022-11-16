import { Component, OnInit } from '@angular/core';
import { OemElement } from '../../../interfaces/oem-elemnt';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, enginesSelector } from '../../../store/reducers';
import { FetchEnginesRequest } from '../../../store/actions/engines.actions';


@Component({
  selector: 'app-page-engines',
  templateUrl: './page-engines.component.html',
  styleUrls: ['./page-engines.component.scss']
})
export class PageEnginesComponent implements OnInit {

  public dataSources$?: Observable<OemElement[]>;
  public flexBoxGrid: boolean = false;
  public gridTitle: string = 'Css grid';

  constructor(
      private store$: Store<AppState>
  ) {
    this.store$.dispatch(FetchEnginesRequest());
  }

  ngOnInit(): void {
    this.dataSources$ = this.store$.select(enginesSelector);
  }

  public triggerGrid(): void {
      this.flexBoxGrid = !this.flexBoxGrid;
      this.gridTitle = this.flexBoxGrid ? 'Flex-box' : 'Css grid';
  }
}
