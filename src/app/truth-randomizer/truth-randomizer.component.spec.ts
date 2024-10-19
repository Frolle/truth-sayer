import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruthRandomizerComponent } from './truth-randomizer.component';

describe('TruthRandomizerComponent', () => {
  let component: TruthRandomizerComponent;
  let fixture: ComponentFixture<TruthRandomizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruthRandomizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruthRandomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
