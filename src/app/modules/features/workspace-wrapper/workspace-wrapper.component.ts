import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sl-workspace-wrapper',
  templateUrl: './workspace-wrapper.component.html',
  styleUrls: ['./workspace-wrapper.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkspaceWrapperComponent {
}
