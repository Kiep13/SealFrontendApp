import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';

import { WorkspaceWrapperModule } from '@features/workspace-wrapper/workspace-wrapper.module';

import { ChatListComponent } from './components/chat-list/chat-list.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { MessagesComponent } from './messages.component';
import { MessagesRoutingModule } from './messages-routing.module';

@NgModule({
  declarations: [
    ChatListComponent,
    MessagesComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    WorkspaceWrapperModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiSvgModule,
  ]
})
export class MessagesModule { }
