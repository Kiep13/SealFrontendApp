import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgedAvatarComponent } from './badged-avatar.component';

describe('BadgedAvatarComponent', () => {
  let component: BadgedAvatarComponent;
  let fixture: ComponentFixture<BadgedAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgedAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgedAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
