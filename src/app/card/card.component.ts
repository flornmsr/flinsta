import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../model/photo.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  photo: Photo;

  favClicked = false;

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string){
    window.open(url, "_blank");
}

}
