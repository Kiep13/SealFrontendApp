import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { PEOPLE_PAGE_TITLE } from '@shared/contants';

@Component({
  selector: 'sl-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.less']
})
export class PeopleComponent implements OnInit {
  constructor(private titleService: Title) {
  }

  public ngOnInit(): void {
    this.titleService.setTitle(PEOPLE_PAGE_TITLE);
  }
}

