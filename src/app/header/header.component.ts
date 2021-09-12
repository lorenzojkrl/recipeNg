import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() selectedRoute = new EventEmitter<string>();

  collapsed = true;

  constructor() {}

  ngOnInit(): void {}

  onSelectRoute(selectedRoute: string) {
    this.selectedRoute.emit(selectedRoute);
  }
}
