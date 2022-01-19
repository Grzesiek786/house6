import { Component, Input, OnInit } from '@angular/core';
import { House } from 'src/app/interfaces/house.interface';

@Component({
  selector: 'app-popup-photo',
  templateUrl: './popup-photo.component.html',
  styleUrls: ['./popup-photo.component.scss'],
})
export class PopupPhotoComponent implements OnInit {
  @Input()
  public imgSrc: string;

  constructor() {}

  ngOnInit(): void {

  }
}
