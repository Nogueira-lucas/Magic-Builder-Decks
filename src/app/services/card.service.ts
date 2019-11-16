import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Card, ApiQuery } from '../../../node_modules/mtgsdk-ts';
import { Observable } from 'rxjs';

const URL = 'https://api.magicthegathering.io/v1';

@Injectable({
  providedIn: 'root'
})
export class MagicService {

  constructor(private http: HttpClient) {}

  getCardList(): Observable<Card[]> {
    return this.http.get<Card[]>(URL.concat('/cards'));
  }

  getCardByName(name: string): Observable<Card[]> {
    const options = name ?
    {
      params: new HttpParams().set('name', name)
    } : {};
    return this.http.get<Card[]>(URL.concat(`/cards`), options);
  }

}
