import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-summary-view',
  templateUrl: './summary-view.component.html',
  styleUrls: ['./summary-view.component.css']
})
export class SummaryViewComponent {
  SummaryData: any = [];
  constructor(private api: ApiserviceService) { }

  ngOnInit() {
    this.api.getJSON().subscribe(data => {
      this.SummaryData = data;
    });

  }

  getProperty(data: any, label: string) {
    return data.Properties.find((property: { Label: string; }) => property.Label === label);
  }
}
