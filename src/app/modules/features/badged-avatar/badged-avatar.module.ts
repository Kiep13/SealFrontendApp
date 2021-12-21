import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiAvatarModule, TuiBadgedContentModule } from '@taiga-ui/kit';

import { BadgedAvatarComponent } from './badged-avatar.component';

@NgModule({
  declarations: [
    BadgedAvatarComponent
  ],
  imports: [
    CommonModule,
    TuiBadgedContentModule,
    TuiAvatarModule
  ],
  exports: [
    BadgedAvatarComponent
  ]
})
export class BadgedAvatarModule { }
