import { Component, Input, OnInit } from '@angular/core';
import { IHouse } from 'src/app/interfaces/house.interface';
import { HouseService } from 'src/app/services/house.services';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.scss']
})
export class HouseCardComponent implements OnInit {

  @Input() house: IHouse;

  constructor() { }

  ngOnInit(): void {
    
  }
}
