import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../service/unsplash.service';
import { Photo } from '../model/photo.interface'
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public photos: Photo[];

  public hasPhotoError = false;

  public favClicked = true;

  searchQueryCount = 0;

  countdown = '';
  progress = 0;

  constructor(private unsplashService: UnsplashService) { }

  ngOnInit(): void {

    this.firstLoading();
    this.setCountdown();
  }

  private firstLoading(){
    let home = this.getLocalStorage().bern;
    this.hasPhotoError = false;
    this.unsplashService.getImage(home.current, "bern").subscribe(photos => {
      
      
      this.photos = photos['results'];
      home.max = photos['total_pages'];
      home.current = (home.current+1)%home.max;
      let save = this.getLocalStorage();
      save.bern = home;
      this.setLocaleStorage(save);
      console.log(photos);
    }, error => {
      console.log("dinne");
      this.photoError(error)
    })
  }

  getPhotos(query?: string) {
    if(!query) {
      query = this.searchQueryCount%2 == 0 ? 'alpstein' : 'bern';
      console.log(query)
      this.searchQueryCount++;
    }

    let obj = this.getLocalStorage()[query];
    this.hasPhotoError = false;
    this.unsplashService.getImage(obj.current, query).subscribe(photos => {

      this.photos.push(...photos['results']);

      obj.max = photos['total_pages'];
      obj.current = (obj.current+1)%obj.max;
      let save = this.getLocalStorage();
      save[query] = obj;
      this.setLocaleStorage(save);

    }, error => {
      console.log("dinne");
      this.photoError(error)
      
    })
  }

  getLocalStorage(): currentPage {
    let item = JSON.parse(localStorage.getItem('flinsta_pages'));
    if(item){
      return item;
    }
    else{
      return {
        bern:{
          current: 1,
          max: null
        },
        alpstein:{
          current: 1,
          max: null
        },
        kitten:{
          current: 1,
          max: null
        }
      }
    }
    
  }

  setLocaleStorage(item: currentPage){
    localStorage.setItem('flinsta_pages', JSON.stringify(item));
  }

  photoError(error){
    console.log(error)
    this.hasPhotoError = true;
  }

  setCountdown() {
    var countDown = new Date('2025-04-24T17:20:00.000Z').getTime();

    setInterval(() => {

        var currtentTime = new Date().getTime();


        var difference = countDown - currtentTime;

        var dayMillis = 1000 * 60 * 60 * 24;
        var hourMillis = dayMillis / 24;
        var minMillis = hourMillis / 60;

        var days = Math.floor(difference / dayMillis)
        var hours = Math.floor((difference % dayMillis) / hourMillis)
        var minutes = Math.floor((difference % hourMillis) / minMillis)
        var seconds = Math.floor(difference % minMillis / 1000);

        this.countdown = `Noch ${days} Tage ${hours}:${minutes}:${seconds}`

        this.progress = Math.round((100-(difference/(105*dayMillis))*100)*100) / 100;
        // this.progress = 99
        
    }, 1000)
  }

  



}

export interface currentPage{
  bern:{
    current: number;
    max: number;
  },
  alpstein: {
    current: number;
    max: number;
  }
  kitten: {
    current: number;
    max: number;
  }
  
}
