import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';
import { UUID } from 'angular2-uuid';

@Component({
  templateUrl: './add-ged-files.component.html',
  styleUrls: ['./add-ged-files.component.scss'],
})
export class addGedFilesComponent implements OnInit {
  @ViewChild('file', { static: true })
  items: GalleryItem[] = [];
  files: any[] = [];
  ImagePers = '';
  isLoading: boolean = false;
  error: string = '';

  constructor(
    public dialogRef: MatDialogRef<addGedFilesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar
  ) {}

  saveName(value: any, e: any) {
    this.files
      .filter((a) => a.id === e.id)
      .map((e) => {
        e.descriptionFichier = value;
      });
  }

  ngOnInit() {
    this.items = this.files.map(
      (item) => new ImageItem({ src: item.dataByte, thumb: item.dataByte })
    );
  }
  uploadedFiles(file: any) {
    this.onFilesAdded(file);
  }

  onFilesAdded(file: any) {
    const filesAdded = file;
    if (filesAdded && filesAdded.length > 0) {
      const promises: Promise<{ imgBytes: string; typeGeds: string }>[] = [];
      for (const file of filesAdded) {
        promises.push(this.getBase64(file));
      }

      Promise.all(promises)
        .then((result) => {
          result.forEach((file) => {
            this.files.push({
              id: UUID.UUID(),
              typeGeds: file.typeGeds,
              dataByte: file.imgBytes,
            });
          });
        })
        .catch((err) => console.log('erreur du conversation', err));
    }
  }

  ajouter() {
    if (this.files && !this.files.length) {
      this.snackBar.open('Aucun fichier a ajouter.', '', {
        duration: 3000,
      });
      return;
    }
    console.log(this.files);
  }

  deletItem(e: any) {
    if (e) {
      this.files = this.files.filter((a) => a.id !== e.id);
    }
  }

  getBase64(file: File): Promise<{ imgBytes: string; typeGeds: string }> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const typeGeds = file.name.slice(file.name.lastIndexOf('.') + 1);
        console.log(`for file: ${file.type} : detected type is: ${typeGeds}`);
        resolve({ imgBytes: reader.result as string, typeGeds });
      };
      reader.onerror = (error) => reject(error);
    });
  }
}
