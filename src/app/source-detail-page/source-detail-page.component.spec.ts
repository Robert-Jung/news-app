import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceDetailPageComponent } from './source-detail-page.component';

describe('SourceDetailPageComponent', () => {
  let component: SourceDetailPageComponent;
  let fixture: ComponentFixture<SourceDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
