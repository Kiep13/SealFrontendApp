import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent  {
}
