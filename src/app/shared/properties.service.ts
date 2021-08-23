import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Properties } from './common.model';
import { map } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PropertiesService {
    constructor(private httpClient: HttpClient) { }
    public changePropertyData = new Subject<any>();
    getAllProperties(): Observable<Properties[]> {
        return this.httpClient.get<Properties[]>(environment.backend
            + '/data')
            .pipe(
                retry(1),
                catchError(this.processError)
            )
    }

    changePropertyStatus(property: any) {
        this.changePropertyData.next(property);
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
