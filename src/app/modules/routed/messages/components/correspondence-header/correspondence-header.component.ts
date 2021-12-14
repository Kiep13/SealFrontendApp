import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IChat } from "@core/interfaces";
import { CHATS_MOCK } from "@mocks/chats-mock";

@Component({
  selector: 'sl-correspondence-header',
  templateUrl: './correspondence-header.component.html',
  styleUrls: ['./correspondence-header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CorrespondenceHeaderComponent {
  chat: IChat = CHATS_MOCK[0];
}
