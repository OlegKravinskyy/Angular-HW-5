import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppunorderedListComponent } from './appunordered-list.component';

describe('AppunorderedListComponent', () => {
  let component: AppunorderedListComponent;
  let fixture: ComponentFixture<AppunorderedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppunorderedListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppunorderedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
