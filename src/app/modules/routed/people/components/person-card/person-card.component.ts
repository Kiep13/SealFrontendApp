import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IUser } from '@core/interfaces';

@Component({
  selector: 'sl-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonCardComponent {
  @Input() public user: IUser;
}
