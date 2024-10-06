import { Injectable } from "@angular/core";

import { Observable,Subscriber, Subject,BehaviorSubject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Injectable()
export class LoaderService {
  public status: Subject<boolean> = new Subject<boolean>();
  private _active: boolean = false;

  public get active(): boolean {
    return this._active;
  }

  public set active(v: boolean) {
    this._active = v;
    this.status.next(v);
  }

  public start(): void {
    this.active = true;
  }

  public stop(): void {
    this.active = false;
  }
}
