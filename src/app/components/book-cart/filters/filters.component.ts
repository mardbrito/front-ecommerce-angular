import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  data1 = 0;
  data2 = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private httpService: HttpClient,) { }
  start(event: any) {
    this.data1 = event;
    console.log(this.data1);
  }
  end(event: any) {
    this.data2 = event;
    console.log(this.data2);
  }

  ngOnInit(): void {
  }
  

}
