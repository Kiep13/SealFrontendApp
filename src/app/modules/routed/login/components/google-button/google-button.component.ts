import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sl-google-button',
  templateUrl: './google-button.component.html',
  styleUrls: ['./google-button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoogleButtonComponent {
  public googleIcon = 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg';
}
