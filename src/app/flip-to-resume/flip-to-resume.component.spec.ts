import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipToResumeComponent } from './flip-to-resume.component';

describe('FlipToResumeComponent', () => {
  let component: FlipToResumeComponent;
  let fixture: ComponentFixture<FlipToResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipToResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipToResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
