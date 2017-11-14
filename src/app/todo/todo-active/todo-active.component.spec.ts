import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoActiveComponent } from './todo-active.component';

describe('TodoActiveComponent', () => {
  let component: TodoActiveComponent;
  let fixture: ComponentFixture<TodoActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
