import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent {
  detailData: any = [];
  updatedData: any = [];
  selectedSamplingTime = '';
  constructor(private api: ApiserviceService) { }

  ngOnInit() {
    this.api.getJSON().subscribe(data => {
      this.detailData = data;
    });

  }


  onSamplingTimeSelect(event: any) {
    this.selectedSamplingTime = event.target.value;
  }

  getProperty(data: any, label: string): any {
    const property = data.Properties.find((prop: { Label: string; }) => prop.Label === label);
    return property ? property : { Label: label, Value: '' };
  }

  onSave() {
    for (const data of this.detailData.Datas) {
      if (data.SamplingTime === this.selectedSamplingTime) {
        for (const prop of data.Properties) {
          const element = document.getElementById(prop.Label) as HTMLInputElement;
          if (element) {
            prop.Value = element.value;
          }
        }
        break;
      }
    }
    // Save the updated JSON data
    console.log("this.detailData",this.detailData);
    
    const updatedData = this.detailData
    this.api.updateJSON(updatedData).subscribe(response => {
    });
  }

}
