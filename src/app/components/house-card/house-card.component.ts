import { Component, ComponentRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { House } from 'src/app/interfaces/house.interface';
import { DialogService } from '../dialog/dialog.service';
import { PopupPhotoComponent } from '../dialog/popup-photo/popup-photo.component';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.scss']
})
export class HouseCardComponent implements OnInit {
  @Input()
  public house: House;
  @Input()
  public isLatestReserved: boolean = false;
  @Output()
  public houseReserved: EventEmitter<string> = new EventEmitter<string>();
  public address: string = '';
  public imagesAvailability: boolean = false;

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    this.address = `${this.house.address.street} ${this.house.address.number}`
  }

  public reservedHouse() {
    this.houseReserved.emit(this.house.id);
  }

  public morePhotos(): void {
    this.imagesAvailability = !this.imagesAvailability;
  }

  public showPhoto(house: string): void {
    const componentRef: ComponentRef<PopupPhotoComponent> = this.dialogService.openDialog(PopupPhotoComponent);
    componentRef.instance.imgSrc = house;
  }

}
