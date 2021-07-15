import {Component, OnInit} from '@angular/core';

export interface Card {
  title: string;
  text: string;
}

@Component({
  selector: 'cards-app',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class BasicsComponent implements OnInit {
  toggle = false;
  cards: Card[] = [
    { title: 'Card 1', text: 'This is card number 1' },
    { title: 'Card 2', text: 'This is card number 2' },
    { title: 'Card 3', text: 'This is card number 3' },
  ];
  toggleCards() {
    this.toggle = !this.toggle;
  }
  ngOnInit(): void {
  }
}
