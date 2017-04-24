import { Component } from '@angular/core';

@Component({
  templateUrl: 'contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  // google maps zoom level
  zoom: number = 8;

  lat: number = 13.077921;
  lng: number = 80.222802;

    clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

	mapClicked($event: any) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

 markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
 markers: marker[] = [
	  {
		  lat: 12.973858,
		  lng: 80.015982,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 13.373858,
		  lng: 80.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 12.723858,
		  lng: 80.000000,
		  label: 'C',
		  draggable: true
	  }
  ]
}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
