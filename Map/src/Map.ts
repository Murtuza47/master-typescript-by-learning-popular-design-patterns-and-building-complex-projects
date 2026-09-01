import { Company } from "./Company";
import { User } from "./User";

export class Map {
  googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  addMarker(geoPointers: { lat: number; lng: number }): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: geoPointers
    })
  }
}