import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceWrapperModule } from '@features/workspace-wrapper/workspace-wrapper.module';

import { PeopleComponent } from './people.component';
import { PeopleRoutingModule } from './people-routing.module';

@NgModule({
  declarations: [
    PeopleComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    WorkspaceWrapperModule
  ]
})
export class PeopleModule { }
