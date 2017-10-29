import {Injectable} from '@angular/core';
import {FileSearchOptions} from '../classes/file_search_options'
import {FileModel} from '../classes/file'
import {Http,Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/observable/throw';

@Injectable()
export class FileService{

	constructor(private _http: Http){}

	getFiles(fo: FileSearchOptions) : Observable<FileModel[]> {
		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers: headers});

		return this._http
		.post('http://localhost:7643/api/File', fo, options)
		.map(this.extractData)
		.catch(this.handleError);
	}

	private handleError(error: Response | any) {
			console.error(error.message || error);
			return Observable.throw(error.message || error)
	}


	addFile(file: FileModel) :Observable<string>{
		let formData:FormData = new FormData();
        formData.append('uploadFile', file.data, file.data.name);

        let headers = new Headers();

        let options = new RequestOptions({ headers: headers });

		return this._http
		.put('http://localhost:7643/api/File?username=' + file.username, formData, options)
		.map((response: Response) => response.toString())
		.catch(this.handleError);
	}

	private extractData(res: Response) {
 	var data = <FileModel[]> res.json() || [];

  	data.forEach((d:FileModel) => {
    	d.addingDate = new Date(d.addingDate);
  	});

  	 return data;
	}
}