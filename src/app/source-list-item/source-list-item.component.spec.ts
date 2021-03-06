import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceListItemComponent } from './source-list-item.component';

describe('SourceListItemComponent', () => {
  let component: SourceListItemComponent;
  let fixture: ComponentFixture<SourceListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
