import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import {
  TuiAvatarModule,
  TuiBadgedContentModule,
  TuiBadgeModule,
  TuiInputModule,
  TuiIslandModule
} from '@taiga-ui/kit';

import { WorkspaceWrapperModule } from '@features/workspace-wrapper/workspace-wrapper.module';

import { ChatListComponent } from './components/chat-list/chat-list.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { MessagesComponent } from './messages.component';
import { MessagesRoutingModule } from './messages-routing.module';
import { ChatItemComponent } from './components/chat-item/chat-item.component';
import { CorrespondenceComponent } from './components/correspondence/correspondence.component';
import { CorrespondenceHeaderComponent } from './components/correspondence-header/correspondence-header.component';

@NgModule({
  declarations: [
    ChatListComponent,
    MessagesComponent,
    SearchFormComponent,
    ChatItemComponent,
    CorrespondenceComponent,
    CorrespondenceHeaderComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    WorkspaceWrapperModule,
    TuiBadgedContentModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiSvgModule,
    TuiIslandModule,
    TuiAvatarModule,
    TuiBadgeModule,
  ]
})
export class MessagesModule { }
