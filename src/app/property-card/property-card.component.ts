import { Component, OnInit } from '@angular/core';
import { Properties } from '../shared/common.model';
import { PropertiesSortFields, PropertyStatus } from '../shared/constants';
import { PropertiesService } from '../shared/properties.service';


@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {
  filteresProperties: Properties[] = [];
  errorMessage: string = '';
  constructor(private propertiesService: PropertiesService) { }
  sortField: string = 'price';
  sortDirection: string = 'asc';

  sortFields = PropertiesSortFields;
  propertyStatus = PropertyStatus;
  selectedPropertyStatus: string = 'active';
  allProperties: Properties[] = [];
  ngOnInit() {
    this.getProperties();
  }

  getProperties() {
    return this.propertiesService.getAllProperties().subscribe((res: Properties[]) => {
      this.allProperties = res;
      this.filterProperties();
    }, (error: any) => this.errorMessage = error.statusText)
  }

  getImagePath(id: number) {
    return "../../assets/images/crib-" + (id) + ".jpg";
  }

  filterProperties() {
    this.filteresProperties = this.allProperties.filter(x => x.status === this.selectedPropertyStatus);
  }

  changePropertyStatus(id: number) {
    let propertyChanged = this.allProperties.find(x => x.id === id);
    if (propertyChanged && propertyChanged.status) {
      propertyChanged.status = propertyChanged.status === 'active' ? 'expired' : 'active';
      this.propertiesService.changePropertyStatus(propertyChanged);
    }
  }
}
