import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: [ './dynamic-list.component.css' ]
})

export class DynamicListComponent implements OnInit {
  @Input() listLength: number;
  public items: ListItem[];

  ngOnInit() {
    this.items = this.getListItems(this.listLength);
  }

  getListItems = (listLength: number): ListItem[] => {

    const listItems: ListItem[] = [];
    let index = 0;

    for (listLength; listLength > 0; listLength--) {

        const id = `list-item-${index}`;

        const isEveryThirdItem = (index + 1) % 3 === 0;
        const classes = isEveryThirdItem
        ? 'listItem clickable'
        : 'listItem';

        const listItem: ListItem = {
          id: id,
          classes: classes
        };

        listItems.push(listItem);
        index++;
    }
    return listItems;
  }

  deleteListItem = (id: string): void => {
    this.items = this.items.filter(item => item.id !== id);
  }

  handleClick = (id: string): void => {
    const item = document.getElementById(id);
    if (item.classList.contains('clickable')) {
      item.classList.toggle('clicked');
    }
  }
}

interface ListItem {
  id: string;
  classes: string;
}
