import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
    TuiMarkerIconModule,
    RouterModule
  ],
  exports: [
    WorkspaceWrapperComponent
  ]
})
export class WorkspaceWrapperModule { }
