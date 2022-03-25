import { Component, Input, OnInit } from '@angular/core';
import { User, Status, Colors } from '../model/model';
import { CountagePipe } from '../pipes/countage.pipe';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [CountagePipe],
})
export class CardComponent implements OnInit {
  @Input() user: User | undefined;

  cardBackgroundColor: string | undefined = '';

  constructor() {}

  ngOnInit(): void {
    this.setColor();
  }

  setColor() {
    if (this.user?.status == Status.Active) {
      this.cardBackgroundColor = Colors.Green;
    } else if (this.user?.status == Status.Deleted) {
      this.cardBackgroundColor = Colors.Red;
    } else {
      this.cardBackgroundColor = Colors.Blue;
    }
  }

  getStyle(status: Status | undefined) {
    return {
      red: status == Status.Deleted,
      blue: status == Status.Inactive,
      green: status == Status.Active,
    };
  }
}
