import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { CardBlockComponent } from './card-block/card-block.component';
import { AppunorderedListComponent } from './appunordered-list/appunordered-list.component';
import { UnorderedListComponent } from './appunordered-list/unordered-list/unordered-list.component';
import { ListItemComponent } from './appunordered-list/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsContainerComponent,
    CardBlockComponent,
    AppunorderedListComponent,
    UnorderedListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
