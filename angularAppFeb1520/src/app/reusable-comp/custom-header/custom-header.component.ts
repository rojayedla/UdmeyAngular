import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 
@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss']
})
export class CustomHeaderComponent implements OnInit {
  @Input() fileName: string ;
  @Input() filePath: any ;
  @Output() readSelection: EventEmitter<any> = new EventEmitter();
  @Output() fileClose: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  readSelectionEvent(event) {
    this.readSelection.emit(event);
  }

  closeFile(event) {
    this.fileClose.emit(event);
}
}
