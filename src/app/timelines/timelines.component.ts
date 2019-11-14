import {Component, OnInit} from '@angular/core';
import {DateUtilService} from '../services/date-util.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {
  output = '';

  constructor(private router: Router, private dateUtilService: DateUtilService) {
  }

  ngOnInit() {
  }

  onChange(value) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }



}
