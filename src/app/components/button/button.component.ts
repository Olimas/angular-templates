import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string | any;
  @Input() color: string | any;
  @Output() btnClick = new EventEmitter(); // for reuse button in other components

  constructor() {
  }

  onClick(): void {
    this.btnClick.emit();
  }

  ngOnInit(): void {
  }

}
