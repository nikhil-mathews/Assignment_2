import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'AIzaSyCnNfklp2ko9Cu8DlCoDctH6cupJ8tJk-k';
  YOUR_API_KEY = '83194a29179241fd9beb704664707c76';
  constructor(private httpClient: HttpClient) { }

  
  public getplaces(params : string){
   return this.httpClient.get('/api/search?query='+params); // use for express js
    //return this.httpClient.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${params}&key=${this.API_KEY}`);
  }

  public getprofile(params : string){
    return this.httpClient.get('/api/restaurant?query='+params); // use for express js
   // return this.httpClient.get('https://maps.googleapis.com/maps/api/place/details/json?place_id='+params+'&key='+this.API_KEY);
  }


}
 
