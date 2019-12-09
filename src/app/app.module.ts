import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../MaterialModule';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SidenavService } from './services/sidenav.service'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { VerticalNavbarComponent } from './components/vertical-navbar/vertical-navbar.component';
import { SearchContentComponent } from './components/search-content/search-content.component';
import { SearchFilePreviewComponent } from './components/search-file-preview/search-file-preview.component';
import { FilterComponent } from './components/filter/filter.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';

import { AngularSplitModule } from 'angular-split';
import { SearchFileComponent } from './search-file/search-file.component';
import { FullscreenService } from './services/fullscreen.service';
import { SingleSearchResultComponent } from './components/search-content/single-search-result/single-search-result.component';



@NgModule({
  imports:[ 
    BrowserModule, 
    BrowserAnimationsModule, 
    FlexLayoutModule, 
    FormsModule,
    HttpModule,
    HttpClientModule, 
    ReactiveFormsModule, 
    MaterialModule,
    AngularSplitModule.forRoot() ,

    ],

  entryComponents: [ FilterComponent ],

  declarations: [ 
    AppComponent, 
    HelloComponent, 
    NavbarComponent, 
    SearchBarComponent, 
    VerticalNavbarComponent, 
    SearchContentComponent, 
    SearchFilePreviewComponent, 
    FilterComponent,
    LeftMenuComponent,
    SearchFileComponent,
    SingleSearchResultComponent,
  

    ],
  providers: [ SidenavService, FullscreenService ],
  bootstrap:[ AppComponent, FilterComponent],
  
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
