import { Component, OnInit } from '@angular/core';
import { MagicService } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private cardService: MagicService) {}

  ngOnInit() {

  }


}
