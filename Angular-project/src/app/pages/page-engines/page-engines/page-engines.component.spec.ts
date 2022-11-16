import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEnginesComponent } from './page-engines.component';

describe('PageResultComponent', () => {
  let component: PageEnginesComponent;
  let fixture: ComponentFixture<PageEnginesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEnginesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEnginesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
