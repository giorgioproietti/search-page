import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  selectable: boolean = true;

  filters = [
    {name: 'All'},
    {name: 'Entries'},
    {name: 'Attachements'},
    {name: 'Results'},
    {name: 'Entities'},
    {name: 'Results'},
    {name: 'Results'},
    {name: 'Results'},
    {name: 'Results'}
  ];

  selectedFilters: any[] = [];

  isSelected(filter: any): boolean {
    const index = this.selectedFilters.indexOf(filter);
    return index >= 0;
  }


  toggleFilter(filter: any): void {
    let index = this.selectedFilters.indexOf(filter);

    if (index >= 0) {
      this.selectedFilters.splice(index, 1);
    } else {
      this.selectedFilters.push(filter);
    }
  }
}