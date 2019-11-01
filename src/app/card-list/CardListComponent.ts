import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'mtgsdk-ts';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MagicService } from '../services/card.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('fadeCard', [
      state('zero', style({
        backgroundColor: 'rgba(0, 0, 0, 0)'
      })),
      state('final', style({
        backgroundColor: 'none'
      })),
      transition('zero => final', [
        animate('1s')
      ])
    ])
  ]
})
export class CardListComponent implements OnInit {

  @ViewChild('mat-card', { static: false }) card: MatCardModule;
  @ViewChild('mat-progress-bar', { static: false }) progress: MatProgressBarModule;
  @ViewChild('mat-paginator', { static: false }) paginator: MatPaginatorModule;

  private cards$: Observable<Card[]>;

  private IMAGE_DEFAULT_PATH = '../../assets/img/magic-card-error.jpg';

  constructor(private cardService: MagicService) { }

  ngOnInit() {
    this.getCardList();
  }

  getCardList() {
    this.cards$ = this.cardService.getCardList();
  }
  changePermission(item: string) {
    if (item) {
      return item.replace('http', 'https');
    }
    return this.IMAGE_DEFAULT_PATH;
  }
}
