import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttiributeSelectorComponent } from './attiribute-selector.component';

describe('AttiributeSelectorComponent', () => {
  let component: AttiributeSelectorComponent;
  let fixture: ComponentFixture<AttiributeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttiributeSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttiributeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
