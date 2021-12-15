import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sl-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent {
  public searchControl: FormControl = new FormControl('');
}
