import { Component, Input, OnInit} from '@angular/core';
import { OemElement } from '../../../../interfaces/oem-elemnt';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent implements OnInit {
  @Input() elementTable?: OemElement;

  constructor() { }

  ngOnInit(): void {
  }

}
