import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-view-card",
  templateUrl: "./view-card.component.html",
  styleUrls: ["./view-card.component.scss"],
})
export class ViewCardComponent implements OnInit, OnChanges {
  @Input() infoData;
  @Input() DataInfoApi;
  @Input() displayAllCard = true;
  @Input() displayIn;

  displayData = [];
  formatData = [];
  numcols: number;
  isLoading: boolean = true;

  constructor() {}

  ngOnInit() {
    const resultDivision = this.infoData.data.length / this.infoData.rows;
    this.numcols = 12 / this.infoData.cols;
    for (let i = 0; i < this.infoData.data.length; i = i + resultDivision) {
      this.displayData.push(this.infoData.data.slice(i, i + resultDivision));
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.DataInfoApi !== null) {
      this.getData();
    }
  }
  

  getData() {
    this.formatData = [];
    if (this.infoData.data && this.DataInfoApi && !isEmpty(this.DataInfoApi)) {
      this.infoData.data.forEach((e) => {
        if (e.path === "") {
          this.formatData.push({
            name: e.Libelle,
            type: e.type,
            body: this.DataInfoApi[e.attribute],
          });
        } else if (
          this.DataInfoApi[e.path] == null ||
          this.DataInfoApi[e.path][e.attribute] === undefined
        ) {
          this.formatData.push({ name: e.Libelle, type: e.type, body: "" });
        } else if (this.DataInfoApi[e.path][e.attribute] === true) {
          this.DataInfoApi[e.path][e.attribute] = "Sans TVA";
          this.formatData.push({
            name: e.Libelle,
            type: e.type,
            body: this.DataInfoApi[e.path][e.attribute],
          });
        } else if (this.DataInfoApi[e.path][e.attribute] === false) {
          this.DataInfoApi[e.path][e.attribute] = "Avec TVA";
          this.formatData.push({
            name: e.Libelle,
            type: e.type,
            body: this.DataInfoApi[e.path][e.attribute],
          });
        } else {
          this.formatData.push({
            name: e.Libelle,
            type: e.type,
            body: this.DataInfoApi[e.path][e.attribute],
          });
        }
      });
    }
    this.isLoading = false;
    return this.formatData;
  }
}

function isEmpty(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}


