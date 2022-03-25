import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UsersNamePipe } from './pipes/users-name.pipe';
import { CountagePipe } from './pipes/countage.pipe';
import { AddBlockPipe } from './pipes/addBlock.pipe';
import { ColorOnHoverDirective } from './directives/colorOnHover.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HighlightDirective,
    UsersNamePipe,
    CountagePipe,
    AddBlockPipe,
    ColorOnHoverDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
