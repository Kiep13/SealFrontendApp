import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'sl-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageFormComponent {
  public messageControl: UntypedFormControl = new UntypedFormControl('');
}
