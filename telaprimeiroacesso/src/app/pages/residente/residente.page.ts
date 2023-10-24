import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http-service.service';

@Component({
  selector: 'app-residente',
  templateUrl: './residente.page.html',
  styleUrls: ['./residente.page.scss'],
})
export class ResidentePage implements OnInit {

  constructor(private http:HttpService){
    
  }

  ngOnInit() {
  }

}
