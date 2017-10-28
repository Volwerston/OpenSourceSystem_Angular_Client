import {Injectable} from '@angular/core';
import {NoteSearchOptions} from '../classes/note_search_options'
import {Note} from '../classes/note'
import {Http,Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/observable/throw';



@Injectable()
export class NoteService{

	constructor(private _http: Http){}

	getNotes(no: NoteSearchOptions) : Observable<Note[]> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });

		return this._http
		.post('http://localhost:7643/api/Note', no, options)
		.map(this.extractData)
		.catch(this.handleErrorObservable);
	}

	private handleErrorObservable (error: Response | any) {
	console.log(error.message || error);
	return Observable.throw(error.message || error);
    }

	addNote(note: Note) :Observable<string> {
		let headers = new Headers({'Content-Type': 'application/json'});
		let options = new RequestOptions({headers: headers});

		return this._http
		.put('http://localhost:7643/api/Note', note, options)
		.map((response: Response) => response.toString())
		.catch(this.handleErrorObservable);
	}

	private extractData(res: Response) {
 	var data = <Note[]> res.json() || [];

  	data.forEach((d:Note) => {
    	d.addingDate = new Date(d.addingDate);
  	});

  	 return data;
	}
}