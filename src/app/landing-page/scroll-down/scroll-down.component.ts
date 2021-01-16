import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-scroll-down',
  templateUrl: './scroll-down.component.html',
  styleUrls: ['./scroll-down.component.css']
})
export class ScrollDownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      AOS.init();
  }

}
