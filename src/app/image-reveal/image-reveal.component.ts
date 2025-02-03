import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-reveal',
  templateUrl: './image-reveal.component.html',
  styleUrls: ['./image-reveal.component.scss']
})
export class ImageRevealComponent{

  @Input()
  progress = 100;


  getHeight(): number{
    return Math.sqrt((100-this.progress)/100)*100
  } 

  getInvProgress() : string {
     
    var res = Math.floor((100 - this.progress)*100)/100
    if(res > 0.5){
      return res + '%';
    }
    return ''
  }


}
