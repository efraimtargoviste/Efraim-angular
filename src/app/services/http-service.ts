import { catchError, map, Observable, throwError } from "rxjs";
import { HttpCall } from "../interfaces/interfaces";
import { HttpClient, HttpErrorResponse, HttpRequest } from "@angular/common/http";
import { LoaderService } from "./loader.service";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class HttpService {

    constructor(
        private http: HttpClient,
        public loaderService: LoaderService){

    }

    public request(options: HttpCall): Observable<any> {
        this.loaderService.start();
        let callPath = options.url;
        let req = new HttpRequest(options.method, options.url, options.body, options);
        let httpGet = this.http.request(options.method.toUpperCase(), req.url, options as any);
        return this.httpCallMap(httpGet, options, callPath);
    }

    private httpCallMap(httpCall: Observable<any>, call: HttpCall, callPath: string): Observable<any> {
        let response = httpCall.pipe(
          map((res) => {
            if (call.loader != false) {
              this.loaderService.stop();
            }
            return res;
          })
        );
        if (call.noErrorHandle) {
          return response;
        } else {
          return response.pipe(catchError((error: HttpErrorResponse) => {
            this.loaderService.stop();
            return throwError( error.statusText)
          }));
        }
      }
    }