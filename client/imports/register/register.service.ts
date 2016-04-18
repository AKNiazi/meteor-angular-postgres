import {Injectable} from 'angular2/core';

@Injectable()
export class RegisterService {
	
	register(d: Object) {
		console.log('registering user on server....');
		console.log(d);
	}
}
