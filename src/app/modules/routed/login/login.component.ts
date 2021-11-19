import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { APP_PAGE_TITLE } from '@shared/contants';

@Component({
  selector: 'sl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,
              private titleService: Title) {
  }

  public ngOnInit(): void {
    this.titleService.setTitle(APP_PAGE_TITLE);
  }

  public navigateToMessages(): void {
    this.router.navigate(['messages']);
  }
}
