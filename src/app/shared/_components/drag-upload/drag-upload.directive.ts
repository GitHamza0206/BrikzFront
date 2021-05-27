import {
  Directive,
  Output,
  EventEmitter,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDragUpload]',
})
export class DragUploadDirective {
  @Output() files: EventEmitter<any[]> = new EventEmitter();
  @HostBinding('style.background') private background = '#E3F2FD';

  constructor() {}

  @HostListener('dragover', ['$event']) public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#999';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#E3F2FD';
  }

  @HostListener('drop', ['$event']) public onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#E3F2FD';

    const uploadedFiles: any[] = [];

    for (let i = 0; i < evt.dataTransfer.files.length; i++) {
      const file = evt.dataTransfer.files[i];
      uploadedFiles.push(file);
    }

    if (uploadedFiles.length > 0) {
      this.files.emit(uploadedFiles);
    }
  }
}
