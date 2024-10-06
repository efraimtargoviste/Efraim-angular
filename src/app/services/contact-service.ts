import { Injectable } from "@angular/core";
import { HttpService } from "./http-service";


@Injectable({
    providedIn: 'root',
  })
export class ContactService {

    constructor(protected httpService: HttpService){

    }

    /**
     * sendContactForm
obj: any     */
    public sendContactForm(obj: any) {
        debugger
        return this.httpService.request({
            method: 'POST',
            url: '/WeatherForecastController/SaveContactRelationships',
            // body: JSON.stringify(),
            loader: true
          })
    }
}