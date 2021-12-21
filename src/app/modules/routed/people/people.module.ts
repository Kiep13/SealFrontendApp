import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiAvatarModule, TuiBadgedContentModule, TuiIslandModule } from '@taiga-ui/kit';

import { BadgedAvatarModule } from '@features/badged-avatar/badged-avatar.module';
import { SearchFormModule } from '@features/search-form/search-form.module';
import { WorkspaceWrapperModule } from '@features/workspace-wrapper/workspace-wrapper.module';

import { PersonCardComponent } from './components/person-card/person-card.component';
import { PeopleComponent } from './people.component';
import { PeopleRoutingModule } from './people-routing.module';

@NgModule({
  declarations: [
    PersonCardComponent,
    PeopleComponent,
  ],
  imports: [
    BadgedAvatarModule,
    CommonModule,
    PeopleRoutingModule,
    SearchFormModule,
    TuiIslandModule,
    TuiBadgedContentModule,
    TuiAvatarModule,
    WorkspaceWrapperModule
  ]
})
export class PeopleModule { }
