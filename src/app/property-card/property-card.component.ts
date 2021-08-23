import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Properties } from '../shared/common.model';
import { PropertiesSortFields, PropertyStatus } from '../shared/constants';
import { PropertiesService } from '../shared/properties.service';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { faCouch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PropertyCardComponent implements OnInit {
  faBed = faBed;
  faBath = faBath;
  faCouch = faCouch;
  filteredProperties: Properties[] = [];
  errorMessage: string = '';
  constructor(private propertiesService: PropertiesService) { }
  sortField: string = 'price';
  sortDirection: string = 'asc';

  sortFields = PropertiesSortFields;
  propertyStatus = PropertyStatus;
  selectedPropertyStatus: number = 0;
  allProperties: Properties[] = [];
  ngOnInit() {
    this.getProperties();
  }

  getProperties() {
    return this.propertiesService.getAllProperties().subscribe((res: Properties[]) => {
      this.allProperties = res;
      this.filterProperties(0);
    }, (error: any) => this.errorMessage = error.statusText)
  }

  getImagePath(id: number) {
    return "../../assets/images/crib-" + (id) + ".jpg";
  }

  filterProperties(event: Array<number> | number) {
    this.selectedPropertyStatus = event instanceof Array ? event[0] : event;
    if (this.selectedPropertyStatus > 0) {
      this.filteredProperties = this.allProperties.filter(x =>
        x.status === this.selectedPropertyStatus);
    }
    else {
      this.filteredProperties = this.allProperties;
    }
  }

  changePropertyStatus(id: number) {
    let propertyChanged = this.allProperties.find(x => x.id === id);
    if (propertyChanged && propertyChanged.status) {
      propertyChanged.status = this.selectedPropertyStatus;
      this.propertiesService.changePropertyStatus(propertyChanged);
    }
  }
}
