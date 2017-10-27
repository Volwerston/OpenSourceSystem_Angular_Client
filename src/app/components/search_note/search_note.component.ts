import { Component } from '@angular/core';

export class NoteSearchOptions{
	addingDate: Date = new Date();
	title: string = "";
	useName: string = "";
}

@Component({
  selector: 'my-app',
  templateUrl: `app/templates/search_note.html`
})
export class SearchNoteComponent  {
	options: NoteSearchOptions = new NoteSearchOptions();
}
