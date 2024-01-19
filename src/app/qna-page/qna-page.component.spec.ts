import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnaPageComponent } from './qna-page.component';

describe('QnaPageComponent', () => {
  let component: QnaPageComponent;
  let fixture: ComponentFixture<QnaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QnaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QnaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
