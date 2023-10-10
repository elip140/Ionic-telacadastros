import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PrimeiroacessoPage } from './primeiroacesso.page';

describe('PrimeiroacessoPage', () => {
  let component: PrimeiroacessoPage;
  let fixture: ComponentFixture<PrimeiroacessoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrimeiroacessoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
