import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerComponentComponent } from './ver-component.component';

describe('VerComponentComponent', () => {
  let component: VerComponentComponent;
  let fixture: ComponentFixture<VerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
