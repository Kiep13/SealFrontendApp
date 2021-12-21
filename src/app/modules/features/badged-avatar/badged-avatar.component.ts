import { Component, Input } from '@angular/core';
import { TuiSizeXS } from '@taiga-ui/core';

import { IAvatar } from '@core/interfaces';

@Component({
  selector: 'sl-badged-avatar',
  templateUrl: './badged-avatar.component.html',
  styleUrls: ['./badged-avatar.component.less']
})
export class BadgedAvatarComponent {
  @Input() public item: IAvatar;
  @Input() public size: TuiSizeXS = 'm';
}
