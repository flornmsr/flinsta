import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Photo } from '../model/photo.interface';


@Injectable()
export class UnsplashService {

  constructor(private http: HttpClient) { }

  getImage(page: number, query: string): Observable<Photo[]> {
    if (environment.production) {
      return this.http.get<Photo[]>(`https://api.unsplash.com/search/photos?client_id=${environment.accessKey}&query=${query}&page=${page}`);
    }
    else {
      return new Observable(observer => observer.next(JSON.parse('{"total": "10000","total_pages":"1000","results":['+JSON.stringify(environment.fakePhoto)+']}')));
    }
  }
}

