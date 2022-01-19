import { Injectable } from '@angular/core';
import { HouseStatus } from '../enums/status';
import { House } from '../interfaces/house.interface';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  fetchHouses() {
    const houses: House[] = [
      {
        id: '1',
        price: 930000,
        surface: 150,
        status: HouseStatus.FOR_SALE,
        address: {
          street: 'Jana Kowalskiego',
          number: '44A',
          city: 'Warszawa',
        },
        photoSource:
          'https://www.szkolaangulara.pl/wp-content/uploads/2021/10/manor-house-g8e5afa906_1280.jpg',
        photoSources: [
          'https://www.szkolaangulara.pl/wp-content/uploads/2021/10/pexels-pixabay-276724.jpg',
          'https://www.szkolaangulara.pl/wp-content/uploads/2021/10/pexels-terry-magallanes-2635038.jpg',
          'https://www.szkolaangulara.pl/wp-content/uploads/2021/10/pexels-pixabay-271624.jpg',
        ],
      },
      {
        id: '2',
        price: 16530000,
        surface: 275,
        status: HouseStatus.FOR_RENT,
        address: { street: 'Nazarowa', number: '1S', city: 'Kraków' },
        photoSource:
          'https://www.szkolaangulara.pl/wp-content/uploads/2021/10/casting-horn-g100df2f90_1280.jpg',
        photoSources: [],
      },
      {
        id: '3',
        price: 1200000,
        surface: 240,
        status: HouseStatus.SOLD,
        address: { street: 'Ignowskiego', number: '32', city: 'Wrocław' },
        photoSource:
          'https://www.szkolaangulara.pl/wp-content/uploads/2021/10/sweden-g1cdf6280b_1280.jpg',
        photoSources: [
          'https://www.szkolaangulara.pl/wp-content/uploads/2021/10/pexels-pixabay-275484.jpg',
          'https://www.szkolaangulara.pl/wp-content/uploads/2021/10/pexels-pixabay-259962.jpg',
        ],
      },
      {
        id: '4',
        price: 850900,
        surface: 125,
        status: HouseStatus.FOR_SALE,
        address: { street: 'Paderewskiego', number: '1', city: 'Szczecin' },
        photoSource:
          'https://www.szkolaangulara.pl/wp-content/uploads/2021/10/casting-horn-gc96bbd46c_1280.jpg',
        photoSources: [],
      },
      {
        id: '5',
        price: 500300,
        surface: 80,
        status: HouseStatus.FOR_SALE,
        address: { street: 'Szybowcowa', number: '5', city: 'Rzeszów' },
        photoSource:
          'https://www.szkolaangulara.pl/wp-content/uploads/2021/10/mill-gc68dfce5c_1280.jpg',
        photoSources: [],
      },
    ];
    return houses;
  }
}
