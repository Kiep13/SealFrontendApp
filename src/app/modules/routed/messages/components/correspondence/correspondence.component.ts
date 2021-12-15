import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IMessage } from '@core/interfaces';
import { MESSAGES_MOCK } from '@mocks/messages-mock';

@Component({
  selector: 'sl-correspondence',
  templateUrl: './correspondence.component.html',
  styleUrls: ['./correspondence.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CorrespondenceComponent {
  public messages: IMessage[] = MESSAGES_MOCK;

  public trackById(index: number, message: IMessage): number {
    return message.id;
  }
}
