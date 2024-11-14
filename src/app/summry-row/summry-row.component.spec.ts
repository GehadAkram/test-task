import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummryRowComponent } from './summry-row.component';

describe('SummryRowComponent', () => {
  let component: SummryRowComponent;
  let fixture: ComponentFixture<SummryRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummryRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummryRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
