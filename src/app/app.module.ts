import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImagePreloadDirective } from './shared/image-preload.directive';
import { MenuTopoComponent } from './menu-topo/menu-topo.component';
import { CardListComponent } from './card-list/CardListComponent';
import { RodapeComponent } from './rodape/rodape.component';
import { JwPaginationComponent } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    ImagePreloadDirective,
    MenuTopoComponent,
    RodapeComponent,
    JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
