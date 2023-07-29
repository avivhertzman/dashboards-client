import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() clickToggle: EventEmitter<void>;
  @Input() title: string;
  constructor() {
    this.clickToggle = new EventEmitter();
  }
  changePage() {
    this.clickToggle.emit();
  }

}
