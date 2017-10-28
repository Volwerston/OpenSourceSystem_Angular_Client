import { Component, OnInit } from '@angular/core';
import {NoteSearchOptions} from '../../classes/note_search_options'
import {Note} from '../../classes/note'
import {NoteService} from '../../services/note_service.service'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  templateUrl: `app/templates/search_note.html`,
  providers: [NoteService]
})
export class SearchNoteComponent implements OnInit {
	options: NoteSearchOptions = new NoteSearchOptions();
	notes: Note[] = [];
	noteToAdd: Note = new Note();

	constructor(private _noteService: NoteService){}

	ngOnInit(){
	 	this.search();
	}

	search() :void {
		this._noteService.getNotes(this.options).subscribe(_notes => this.notes = _notes);
	}

	saveNote() :void {
		this._noteService
		.addNote(this.noteToAdd)
		.subscribe((_res:string) => {
			this._noteService.getNotes(this.options).subscribe(_notes => this.notes = _notes)
		});

		this.noteToAdd = new Note();
	   }
	}
}
