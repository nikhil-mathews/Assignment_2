import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {
  results;
  name:""; 
  id:string = "";

  constructor(private route: ActivatedRoute, private apiService: ApiService, private r: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    

    this.apiService.getprofile(this.id).subscribe((data)=> {
      console.log(data); 
      this.results = data['result'];
    });
  

  }
}
  
