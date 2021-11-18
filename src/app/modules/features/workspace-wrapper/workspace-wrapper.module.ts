import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuiAvatarModule, TuiMarkerIconModule } from '@taiga-ui/kit';

import { WorkspaceMenuComponent } from './workspace-menu/workspace-menu.component';
import { WorkspaceWrapperComponent } from './workspace-wrapper.component';

@NgModule({
  declarations: [
    WorkspaceMenuComponent,
    WorkspaceWrapperComponent
  ],
  imports: [
    CommonModule,
    TuiAvatarModule,
    TuiMarkerIconModule
  ],
  exports: [
    WorkspaceWrapperComponent
  ]
})
export class WorkspaceWrapperModule { }
