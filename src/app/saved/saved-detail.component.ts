import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { SavedService } from './saved.service';
import { Saved } from './saved.model';

@Component({
  template: `
  <h2>List goes here</h2>
  `
})
export class SavedDetailComponent implements OnInit {
  list: Saved[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SavedService
  ) {}

  ngOnInit() {
    this.getList();
  }

  getList() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getList(id).subscribe(res => console.log(res));
  }


}
