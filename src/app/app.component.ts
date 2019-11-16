import { Component, OnInit } from '@angular/core';
import { MagicService } from './services/card.service';
import { Observable } from 'rxjs';
import { Card } from 'mtgsdk-ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private cards$: Observable<Card[]>;

  constructor(private cardService: MagicService) {}

  ngOnInit() {
    this.getCardList();
  }

  getCardList() {
    this.cards$ = this.cardService.getCardList();
  }

  getCardByName(event: Event) {
    this.cards$ = this.cardService.getCardByName('ajani');
  }

}
