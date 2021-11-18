import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceWrapperModule } from '@features/workspace-wrapper/workspace-wrapper.module';

import { MessagesComponent } from './messages.component';
import { MessagesRoutingModule } from './messages-routing.module';

@NgModule({
  declarations: [
    MessagesComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    WorkspaceWrapperModule
  ]
})
export class MessagesModule { }
