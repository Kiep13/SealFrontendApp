import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MESSAGES_PAGE_TITLE } from '@shared/contants';

@Component({
  selector: 'sl-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less']
})
export class MessagesComponent implements OnInit {
  constructor(private titleService: Title) {
  }

  public ngOnInit(): void {
    this.titleService.setTitle(MESSAGES_PAGE_TITLE);
  }
}
