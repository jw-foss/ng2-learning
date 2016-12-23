/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopiccontentComponent } from './topiccontent.component';

describe('TopiccontentComponent', () => {
  let component: TopiccontentComponent;
  let fixture: ComponentFixture<TopiccontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopiccontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopiccontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
