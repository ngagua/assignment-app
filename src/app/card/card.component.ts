import { Component, Input, OnInit } from '@angular/core';
import { User, Status, Colors } from '../model/model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() user: User | undefined;

  cardBackgroundColor: string | undefined = '';

  // if(user?.status == Status.Active){
  //   this.cardBackgroundColor = Colors.Green
  // } else if (user.status == Status.Deleted) {
  //   this.cardBackgroundColor = Colors.Red

  // } else {
  //   this.cardBackgroundColor = Colors.Blue
  // }

  constructor() {}

  ngOnInit(): void {}
}
