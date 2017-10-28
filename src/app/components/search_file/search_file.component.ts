import { Component } from '@angular/core';
import {FileSearchOptions} from '../../classes/file_search_options'


@Component({
  selector: 'my-app',
  templateUrl: `app/templates/search_file.html`,
  providers: [FileSearchOptions]
})
export class SearchFileComponent  {
	options: FileSearchOptions = new FileSearchOptions();
}
