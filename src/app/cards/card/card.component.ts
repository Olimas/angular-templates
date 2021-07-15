import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../cards.component';

@Component({
  selector: 'app-card', // Where to insert this component
  templateUrl: './card.component.html', // html file for selector: 'app-card'
  styleUrls: ['./card.component.css'], // styles file for selector: 'app-card'
  // interpolation: ['[[', ']]'], // format for interpolation
})
export class CardComponent implements OnInit {
  @Input() card: Card | any;
  @Input() index: number | any;

  title = 'My Card Title';
  text: string = 'My sample text';
  cardDate: Date = new Date();
  textColor: string = '';

  changeTitle() {
    this.card.title = 'Title has been changed!';
  }
  inputHandler(value: any) {
    // console.log(event);
    // const value = event.target.value
    this.title = value;
  }
  ngOnInit() {
  }

}
