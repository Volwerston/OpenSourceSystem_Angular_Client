import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { SearchNoteComponent } from './components/search_note/search_note.component'
import { SearchFileComponent } from './components/search_file/search_file.component'

import {NoteService} from './services/note_service.service'

const appRoutes: Route[] = [
		{ path: '', redirectTo: '/notes', pathMatch: 'full' },
		{ path: 'notes', component: SearchNoteComponent },
		{ path: 'files', component: SearchFileComponent }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpModule ],
  declarations: [ AppComponent, SearchNoteComponent, SearchFileComponent ],
  bootstrap:    [ AppComponent ],
  providers: [NoteService]
})
export class AppModule { }
