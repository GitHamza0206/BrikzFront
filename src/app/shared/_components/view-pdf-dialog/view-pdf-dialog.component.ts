import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-pdf-dialog',
  templateUrl: './view-pdf-dialog.component.html',
  styleUrls: ['./view-pdf-dialog.component.scss']
})
export class ViewPdfDialogComponent implements OnInit {


  constructor(
    public sanitizer: DomSanitizer,

    public dialogRef: MatDialogRef<ViewPdfDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
  }
  



}
