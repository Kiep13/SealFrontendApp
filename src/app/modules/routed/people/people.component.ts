import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { IUser } from '@core/interfaces';
import { PEOPLE_PAGE_TITLE } from '@shared/contants';
import { USERS_MOCK } from "@mocks/users-mock";

@Component({
  selector: 'sl-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleComponent implements OnInit {
  public users: IUser[] = USERS_MOCK;

  constructor(private titleService: Title) {
  }

  public ngOnInit(): void {
    this.titleService.setTitle(PEOPLE_PAGE_TITLE);
  }

  public trackById(index: number, user: IUser): number {
    return user.id;
  }
}

