import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicListComponent } from './dynamic-list.component';

describe('DynamicListComponent', () => {
  let component: DynamicListComponent;
  let fixture: ComponentFixture<DynamicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicListComponent);
    component = fixture.componentInstance;
    component.listLength = 100;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a list with the input length', () => {
    expect(component.items.length).toEqual(component.listLength);
  });

  it('should remove first element after delete button click', () => {
    const event = new Event('click');
    const deleteButton = document.getElementsByClassName('delete')[0];
    deleteButton.dispatchEvent(event);
    expect(component.items.length).toEqual(component.listLength - 1);
  });

  it('should make every third item clickable', () => {
    const thirdEl = document.getElementById('list-item-2');
    const event = new Event('click');
    thirdEl.dispatchEvent(event);

    expect(thirdEl.classList).toContain('clickable');
    expect(thirdEl.classList).toContain('clicked');
  });

  it('should make other list items non-clickable', () => {
    const nonClickableEl = document.getElementById('list-item-0');
    const event = new Event('click');
    nonClickableEl.dispatchEvent(event);

    expect(nonClickableEl.classList).not.toContain('clickable');
    expect(nonClickableEl.classList).not.toContain('clicked');
  });
});
