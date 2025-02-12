import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossaryDetailComponent } from './glossary-detail.component';

describe('GlossaryDetailComponent', () => {
  let component: GlossaryDetailComponent;
  let fixture: ComponentFixture<GlossaryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlossaryDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlossaryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
