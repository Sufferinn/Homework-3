import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-ship',
  templateUrl: './big-ship.component.html',
  styleUrls: ['./big-ship.component.css']
})
export class BigShipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Самый большой в мире круизный лайнер'
  text = 'Французская верфь Chantiers de l’Atlantique сдала в эксплуатацию самый большой в мире круизный лайнер – «Wonder of the Seas». Заказчик судна – американская круизная компания Royal Caribbean.\n' +
    '\n' +
    'Длина круизника составляет 362 м, ширина – 64 м, водоизмещение – 236,8 тыс. тонн. Это пятый и самый большой лайнер из серии Oasis, построенных для Royal Caribbean с 2009 года, начиная с «Oasis of the Seas». Водоизмещение остальных круизников этого класса – от 225 тыс. до 228 тыс. тонн. Пассажировместимость – 6988 человек, экипаж и персонал – 2,3 тыс. человек, количество кают – 2,8 тыс.'
  imgUrl = 'https://cdn.logitravel.ru/wsimgresize/resize/crop/450/320/cdn.logitravel.ru/contenidosShared/cruises/ship/994/header.jpg?jpegQuality=85'
}
