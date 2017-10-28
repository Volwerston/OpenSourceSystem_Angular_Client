import {Injectable} from '@angular/core';
import {FileSearchOptions} from '../classes/file_search_options'
import {File} from '../classes/file'


@Injectable()
export class fileService{

	private files: File[] = [
	{
		addingDate: new Date(),
		title: "A",
		extension: "txt",
		userName: "Yura"
	},
	{
		addingDate: new Date(),
		title: "B",
		extension: "jpg",
		userName: "Sam"
	},
	{
		addingDate: new Date(),
		title: "CD",
		extension: "gif",
		userName: "Bob"
	}];

	getFiles(fo: FileSearchOptions) : File[] {
		console.log(JSON.stringify(fo));
		return this.files;
	}

	addFile(file: File) : void{
		this.files.push(file);
	}
}