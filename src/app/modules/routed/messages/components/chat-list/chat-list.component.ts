import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IChat } from '@core/interfaces';
import { CHATS_MOCK } from '@mocks/chats-mock';

@Component({
  selector: 'sl-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatListComponent {
  public chats: IChat[] = CHATS_MOCK;

  public trackById(index: number, chat: IChat): number {
    return chat.id;
  }
}
