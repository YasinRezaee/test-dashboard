import { Component } from '@angular/core';
import { Flowers } from '../shared/flowers';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
public flowersList: Flowers[]= [
  {id: 101,  name: 'Flower one', src:'../../../assets/images1.jpg', exp: 'This is an explanation about this flower'},
  {id: 102,  name: 'Flower two', src:'../../../assets/images2.jpg', exp: 'This is an explanation about this flower'},
  {id: 103,  name: 'Flower three', src:'../../../assets/images3.jpg', exp: 'This is an explanation about this flower'},
  {id: 104,  name: 'Flower four', src:'../../../assets/images4.jpg', exp: 'This is an explanation about this flower'},
  {id: 105,  name: 'Flower five', src:'../../../assets/images5.jpg', exp: 'This is an explanation about this flower'},
  {id: 106,  name: 'Flower six', src:'../../../assets/images6.jpg', exp: 'This is an explanation about this flower'},
]
}
