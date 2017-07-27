import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GkeepComponent } from './gkeep.component';

describe('GkeepComponent', () => {
  let component: GkeepComponent;
  let fixture: ComponentFixture<GkeepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GkeepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GkeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
