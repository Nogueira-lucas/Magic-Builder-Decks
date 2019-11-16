import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MagicService } from '../services/card.service';
import {MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-menu-topo',
  templateUrl: './menu-topo.component.html',
  styleUrls: ['./menu-topo.component.css']
})
export class MenuTopoComponent implements OnInit {

  @Output() cardName = new EventEmitter();

  constructor(private magicService: MagicService) {}

  ngOnInit() {
  }

  findCardByName(name: string) {
    this.cardName.emit(name);
  }

}
