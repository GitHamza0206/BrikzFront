import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class SuiviDossierService {
  constructor(private http: HttpClient) {}
  getInfoDossier(key: string) {
    return this.http.get(`partageDossier/Dossier/${key}`);
  }
  getGalleryThumbs(key: string) {
    return this.http.get(`PartageDossier/Gallery/Thumbnails/${key}`);
  }
  getTimeLine(key: string) {
    return this.http.get(`partageDossier/Timeline/${key}`);
  }
  getImageFullSize(key: string, fileName: string) {
    return this.http.get(
      `PartageDossier/Gallery/Image/${key}?fileName=${fileName}`
    );
  }
}
