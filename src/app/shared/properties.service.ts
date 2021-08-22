import { Injectable } from '@angular/core';
import { Properties } from './common.model';
import { map } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PropertiesService {
    constructor(private httpClient: HttpClient) { }

    getAllProperties(): Observable<Properties[]> {
        return this.httpClient.get<Properties[]>("http://localhost:3000"
            + '/data')
            .pipe(
                retry(1),
                catchError(this.processError)
            )
    }

    processError(err: any) {
        let message = '';
        if (err.error instanceof ErrorEvent) {
            message = err.error.message;
        } else {
            message = `Error Code: ${err.status}\nMessage: ${err.message}`;
        }
        console.log(message);
        return throwError(message);
    }

}
