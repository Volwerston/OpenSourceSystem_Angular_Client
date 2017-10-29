import { Component, OnInit } from '@angular/core';

import {FileSearchOptions} from '../../classes/file_search_options'
import {FileService} from '../../services/file_service.service'
import {FileModel} from '../../classes/file'


@Component({
  selector: 'my-app',
  templateUrl: `app/templates/search_file.html`,
  providers: [FileSearchOptions, FileService]
})
export class SearchFileComponent implements OnInit  {
	options: FileSearchOptions = new FileSearchOptions();
	files: FileModel[] = [];
	fileToAdd: FileModel = new FileModel();

	constructor(private _fileService: FileService){}

	ngOnInit(){
		this.search();
	}

	search(){
		this._fileService.getFiles(this.options).subscribe(_files => this.files = _files);
	}	

	save(){
		this._fileService.addFile(this.fileToAdd).subscribe(() => {
			this.search(); 
			this.fileToAdd = new FileModel();
		});
	}

	getBlobMime(extension: string): string{
		if(extension == 'jpg' || extension == 'png'){
			return 'image/' + extension;
		}
		else{
			return 'application/' + extension;
		}
	}

	getDownloadUrl(file: FileModel){
			var blob = new Blob([file.data], { type: this.getBlobMime(file.extension) });
 		    return window.URL.createObjectURL(blob);
	}
}
