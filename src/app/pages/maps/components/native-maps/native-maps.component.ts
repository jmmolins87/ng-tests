/// <reference path="../../../../../../node_modules/@types/googlemaps/index.d.ts" />

import { 
  AfterViewInit,
  Component, 
  ElementRef, 
  OnInit, 
  ViewChild 
} from '@angular/core';

@Component({
  selector: 'app-native-maps',
  templateUrl: './native-maps.component.html',
  styleUrls: ['./native-maps.component.css']
})
export class NativeMapsComponent implements AfterViewInit, OnInit {

  public map: google.maps.Map;
  public markers: google.maps.Marker[];

  @ViewChild('divMap')
  public divMap: ElementRef;

  constructor() {
    this.markers = [];
  }

  ngOnInit(): void { }
  
  ngAfterViewInit() {
    if( navigator.geolocation ) {
      navigator.geolocation.getCurrentPosition( position => {
        this.loadMap(position);
        this.loadAutocomplete();
      });
    } else {
      alert('No se puede obtener la ubicación');
    }
  }

  loadMap(position: any) {
    const options = {
      center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.HYBRID
    }

    this.map = new google.maps.Map(this.divMap.nativeElement, options);

    const mapIcon = {
      url: 'https://www.svgrepo.com/show/22031/home-icon-silhouette.svg',
      scaledSize: new google.maps.Size(50, 50)
    }
    const markerPosition = new google.maps.Marker({
      position: this.map.getCenter(),
      animation: google.maps.Animation.BOUNCE,
      icon: mapIcon
    });
    markerPosition.setMap(this.map);

    google.maps.event.addListener(this.map, 'click', (event: google.maps.MouseEvent) => {
      const marker = new google.maps.Marker({
        position: event.latLng,
        animation: google.maps.Animation.DROP,
      });

      marker.setDraggable(true);
      marker.setMap(this.map);

      this.markers.push(marker);

      google.maps.event.addListener(marker, 'click', event => {
        marker.setMap(null);
      });
      google.maps.event.addListener(marker, 'mouseover', event => {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      });
      google.maps.event.addListener(marker, 'mouseout', event => {
        marker.setAnimation(null);
      });
    });
  }

  deleteMarkers() {
    for( let marker of this.markers ) {
      marker.setMap(null);
    }
  }

  loadAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(
      document.querySelector('#inputAutocomplete'),
    )
    google.maps.event.addListener(autocomplete, 'place_changed', event => {
      const place = autocomplete.getPlace();
      // this.map.setCenter(place.geometry.location);
      // this.map.setZoom(17);

      // const marker = new google.maps.Marker({
      //   position: place.geometry.location,
      //   animation: google.maps.Animation.DROP,
      // });
      // marker.setMap(this.map);

      // this.markers.push(marker);

      this.calculateRoute(this.map.getCenter(), place.geometry.location, google.maps.TravelMode.DRIVING)
    })
  }

  calculateRoute( 
    cOrigin: string | google.maps.LatLng, 
    cDestination: string | google.maps.LatLng,
    cTravelMode: google.maps.TravelMode.DRIVING 
  ) {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    directionsRenderer.setMap(this.map);

    directionsService.route({
      origin: cOrigin,
      destination: cDestination,
      travelMode: cTravelMode
    }, result => {
      directionsRenderer.setDirections(result);
    })
  }

}
