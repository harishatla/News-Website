import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private _service: NewsapiservicesService) { }
  businessNews:any=[];

  ngOnInit(): void {
    this._service.businessNews().subscribe((result) =>{
      console.log(result);
      this.businessNews =result.articles;
    });
  }

}
