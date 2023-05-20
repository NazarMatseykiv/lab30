import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task9 } from './task9.component';

describe('Task9', () => {
  let component: Task9;
  let fixture: ComponentFixture<Task9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task9 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task9);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
