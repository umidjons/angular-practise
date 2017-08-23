import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleHeroesTourComponent } from './little-heroes-tour.component';

describe('LittleHeroesTourComponent', () => {
  let component: LittleHeroesTourComponent;
  let fixture: ComponentFixture<LittleHeroesTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LittleHeroesTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleHeroesTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
