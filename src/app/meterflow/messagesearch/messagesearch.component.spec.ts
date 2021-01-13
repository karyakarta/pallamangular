import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesearchComponent } from './messagesearch.component';

describe('MessagesearchComponent', () => {
  let component: MessagesearchComponent;
  let fixture: ComponentFixture<MessagesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
