import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sl-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageFormComponent {
}
