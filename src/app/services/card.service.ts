import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Card } from '../../../node_modules/mtgsdk-ts';
import { Observable } from 'rxjs';

const URL = 'https://api.magicthegathering.io/v1/cards';

@Injectable({
  providedIn: 'root'
})
export class MagicService {

  constructor(private http: HttpClient) {}

  getCardList(): Observable<Card[]> {
    return this.http.get<Card[]>(URL);
  }

}
