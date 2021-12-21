import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import {
  TuiAvatarModule,
  TuiBadgedContentModule,
  TuiBadgeModule,
  TuiInputModule,
  TuiIslandModule
} from '@taiga-ui/kit';

import { BadgedAvatarModule } from '@features/badged-avatar/badged-avatar.module';
import { SearchFormModule } from '@features/search-form/search-form.module';
import { WorkspaceWrapperModule } from '@features/workspace-wrapper/workspace-wrapper.module';

import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatItemComponent } from './components/chat-item/chat-item.component';
import { CorrespondenceComponent } from './components/correspondence/correspondence.component';
import { CorrespondenceHeaderComponent } from './components/correspondence-header/correspondence-header.component';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { MessageComponent } from './components/message/message.component';
import { MessagesComponent } from './messages.component';
import { MessagesRoutingModule } from './messages-routing.module';

@NgModule({
  declarations: [
    ChatItemComponent,
    ChatListComponent,
    CorrespondenceComponent,
    CorrespondenceHeaderComponent,
    MessageFormComponent,
    MessageComponent,
    MessagesComponent,
  ],
  imports: [
    BadgedAvatarModule,
    CommonModule,
    MessagesRoutingModule,
    ReactiveFormsModule,
    SearchFormModule,
    TuiBadgedContentModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiSvgModule,
    TuiIslandModule,
    TuiAvatarModule,
    TuiBadgeModule,
    WorkspaceWrapperModule,
  ]
})
export class MessagesModule { }
