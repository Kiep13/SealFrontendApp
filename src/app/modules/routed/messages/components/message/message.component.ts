import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IMessage } from '@core/interfaces';

@Component({
  selector: 'sl-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent {
  @Input() message: IMessage;
}
