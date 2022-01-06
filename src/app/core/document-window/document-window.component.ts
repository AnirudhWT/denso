import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-document-window',
  templateUrl: './document-window.component.html',
  styleUrls: ['./document-window.component.scss']
})
export class DocumentWindowComponent implements OnInit {
@Input() scrollingContent:any
@Input() pdfOpened:any=false;
@Output() togglePdfWindow: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  toggleNav(){
    this.togglePdfWindow.emit()
  }
}
