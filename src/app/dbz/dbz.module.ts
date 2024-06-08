import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AddCharacterComponent } from './components/add-character/add-character.component';
import { DbzComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    DbzComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports: [
    DbzComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
