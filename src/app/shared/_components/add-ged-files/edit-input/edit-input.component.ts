import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-input',
  templateUrl: './edit-input.component.html',
  styleUrls: ['./edit-input.component.scss'],
})
export class EditInputComponent implements OnInit {
  @Input() data: string = '';
  @Output() focusOut: EventEmitter<string> = new EventEmitter<string>();
  @Output() isEdit: EventEmitter<boolean> = new EventEmitter<boolean>();
  editMode = false;

  constructor() {}

  ngOnInit() {}

  onFocusOut() {
    if (this.data != '') {
      this.focusOut.emit(this.data);
    }
    this.isEdit.emit(true);
  }
}
