import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sl-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent {
}
