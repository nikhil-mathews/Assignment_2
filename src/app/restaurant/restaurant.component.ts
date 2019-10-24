import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  results;
  name:""; 
  id:string = "";
  clickeddisplay: boolean = false;
  constructor(private route: ActivatedRoute, private apiService: ApiService, private r: Router) { }

  ngOnInit() {
    
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.clickeddisplay || this.id!=null){
    this.apiService.getplaces(this.id).subscribe((data)=> {
      console.log(data); 
      this.results = data['results'];
  });

    }
    

  }

  display(){ console.log(this.clickeddisplay);  if (!(this.clickeddisplay)) this.clickeddisplay = true;console.log(this.clickeddisplay); 
    this.r.navigate(['restaurant/'+this.name]);
    this.apiService.getplaces(this.name).subscribe((data)=> {
      console.log(data); 
      this.results = data['results'];
  });
  }

  gotoprofile(id : string){
    this.r.navigate(['profilepage/'+id]);
    console.log(this.id);

  }


}
