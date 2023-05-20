import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task8 } from './task8.component';

describe('Task8', () => {
  let component: Task8;
  let fixture: ComponentFixture<Task8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task8 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task8);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
