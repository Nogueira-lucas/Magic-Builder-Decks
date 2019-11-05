import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'mtgsdk-ts';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MagicService } from '../services/card.service';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {

  @ViewChild('mat-card', { static: false }) card: MatCardModule;
  @ViewChild('mat-progress-bar', { static: false }) progress: MatProgressBarModule;
  @ViewChild('mat-paginator', { static: false }) paginator: MatPaginatorModule;

  private cards$: Observable<Card[]>;
  private isErrorOnLoadCards: boolean;
  p: number = 1;


  private IMAGE_DEFAULT_PATH = '../../assets/img/magic-card-error.jpg';

  constructor(private cardService: MagicService) {
  }

  ngOnInit() {
    this.getCardList();

    this.cards$.subscribe(next => {},
                          error => {
                            console.log('erro');
                            this.isErrorOnLoadCards = true;
                          },
                          () => {
                            console.log('complete!');
                          });
  }

  findCard() {
    
  }

  pageChange(newPage: number) {

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
