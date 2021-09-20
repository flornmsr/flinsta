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

  constructor(private unsplashService: UnsplashService) { }

  ngOnInit(): void {

    this.firstLoading();
  }

  private firstLoading(){
    let home = this.getLocalStorage().switzerland;
    this.hasPhotoError = false;
    this.unsplashService.getImage(home.current, "Switzerland").subscribe(photos => {
      
      
      this.photos = photos['results'];
      home.max = photos['total_pages'];
      home.current = (home.current+1)%home.max;
      let save = this.getLocalStorage();
      save.switzerland = home;
      this.setLocaleStorage(save);
      console.log(photos);
    }, error => {
      console.log("dinne");
      this.photoError(error)
    })
  }

  getPhotos(query: string) {
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
        switzerland:{
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

}

export interface currentPage{
  switzerland:{
    current: number;
    max: number;
  }
  kitten: {
    current: number;
    max: number;
  }
  
}