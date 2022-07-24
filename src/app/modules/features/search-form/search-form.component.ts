import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'sl-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent {
  public searchControl: UntypedFormControl = new UntypedFormControl('');
}
