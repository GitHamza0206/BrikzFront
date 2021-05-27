import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'drag-upload',
  templateUrl: './drag-upload.component.html',
  styleUrls: ['./drag-upload.component.scss'],
})
export class DragUploadComponent {
  @Output()
  uploadedFiles = new EventEmitter<any>();
  @ViewChild('file', { static: true })
  file: any;

  files: any[] = [];
  i = 0;

  ngOnInit(): void {}

  filesDropped(dropfiles: any[]): void {
    console.log('file droped', dropfiles);
    this.files = dropfiles;
    this.uploadedFiles.emit(this.files);
    this.files.length = 0;
  }

  onFilesAdded() {
    const filesAdded = this.file.nativeElement.files;
    this.uploadedFiles.emit(filesAdded);
    this.files.length = 0;
  }

  delete(file: any) {
    if (file) {
      this.files = this.files.filter((e) => e.id != file.id);
    }
  }
}
