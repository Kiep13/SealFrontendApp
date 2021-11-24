import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IChat } from '@core/interfaces';

@Component({
  selector: 'sl-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatItemComponent {
  @Input() public chat: IChat;
}
