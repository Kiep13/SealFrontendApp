import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sl-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent {
}
