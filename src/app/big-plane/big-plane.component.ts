import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-plane',
  templateUrl: './big-plane.component.html',
  styleUrls: ['./big-plane.component.css']
})
export class BigPlaneComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  title = 'Советский самолет АН-225 «Мрия». Самый большой, самый мощный, самый тяжелый во всем мире.'
  text = 'Самолёт был спроектирован и построен в СССР в единственном экземпляре на Киевском механическом заводе (руководитель проекта — В. И. Толмачёв) в 1984—1988 годах[5][6]. Первый полёт был совершён 21 декабря 1988 года. Изначально было заложено две машины; только один экземпляр находился в лётном состоянии и эксплуатировался украинской компанией Antonov Airlines. В СССР имел бортовой номер СССР-82060, после распада СССР перешёл в собственность Украины и получил бортовой номер UR-82060. Второй экземпляр не достроен.'
  imgUrl = 'https://cdnuploads.aa.com.tr/uploads/Contents/2016/05/10/thumbs_b_c_58320640c28147a5277880c1f4cb7887.jpg'
}
