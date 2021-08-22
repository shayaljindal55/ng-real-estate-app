import { Component, OnInit } from '@angular/core';
import { Properties } from '../shared/common.model';
import { PropertiesSortFields } from '../shared/constants';
import { PropertiesService } from '../shared/properties.service';


@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {
  properties: Properties[] = [];
  errorMessage: string = '';
  constructor(private propertiesService: PropertiesService) { }
  sortField: string = 'price';
  sortDirection: string = 'asc';

  sortFields = PropertiesSortFields;

  ngOnInit() {
    this.getProperties();
  }

  getProperties() {
    return this.propertiesService.getAllProperties().subscribe((res: Properties[]) => {
      this.properties = res
    }, (error: any) => this.errorMessage = error.statusText)
  }

  getImagePath(i: number) {
    return "../../assets/images/crib-" + (i + 1) + ".jpg";
  }
}
