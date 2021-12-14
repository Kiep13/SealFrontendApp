import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondenceHeaderComponent } from './correspondence-header.component';

describe('CorrespondenceHeaderComponent', () => {
  let component: CorrespondenceHeaderComponent;
  let fixture: ComponentFixture<CorrespondenceHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrespondenceHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrespondenceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
