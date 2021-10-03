import { Component, OnInit } from '@angular/core';
import { IHouse } from './interfaces/house.interface';
import { HouseService } from './services/house.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  house: IHouse[];

  constructor(private houseService: HouseService) {}

  ngOnInit() {
    this.house = this.houseService.fetchHouses().filter(
      house => {
        return house.price >= 900000;
      }
    );
  }
}
