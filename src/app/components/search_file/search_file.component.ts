import { Component } from '@angular/core';

export class FileSearchOptions{
	addingDate: Date = new Date();
	title: string = "";
	userName: string = "";
	extension: string = "";
}

@Component({
  selector: 'my-app',
  templateUrl: `app/templates/search_file.html`
})
export class SearchFileComponent  {
	options: FileSearchOptions = new FileSearchOptions();
}
