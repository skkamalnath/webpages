import { Injectable, NgZone } from '@angular/core';
import { MarkerComponent } from './marker.component';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { AgmCoreModule } from 'angular2-google-maps/core';

@Injectable()
export class MarkerManager {

    private _markers: Map<MarkerComponent, Promise<MarkerWithLabel>> = new Map<MarkerComponent, Promise<MarkerWithLabel>>();

    /**
     * MarkerManager constructor.
     * @param _googleMapsApi
     * @param _zone
     */
    constructor(
        private _googleMapsApi: GoogleMapsAPIWrapper,
        private _zone: NgZone)
    {
        //
    }

    /**
     * Creates new marker and attaches it to map instance
     * @param marker
     * @param elementRef
     */
    addMarker(marker: MarkerComponent, elementRef) {

        const markerPromise = this._googleMapsApi.getNativeMap().then(map => {

            let latLng = new google.maps.LatLng(marker.lat, marker.lng);

            return new MarkerWithLabel({
                position: latLng,
                draggable: false,
                visible: true,
                raiseOnDrag: false,
                map: map,
                labelContent: elementRef.nativeElement.innerHTML,
                labelVisible: true,
                labelAnchor: new google.maps.Point(9, 9),
                labelClass: 'gm-offer-marker',
                icon: {
                    anchor: new google.maps.Point(0, 0),
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 0,
                    fillColor: '#000000',
                    fillOpacity: 1,
                    strokeColor: '#000000',
                    strokeWeight: 0
                }
            });
        });

        this._markers.set(marker, markerPromise);
    }

    /**
     * @param eventName
     * @param marker
     * @returns {any}
     */
    createEventObservable<T>(eventName: string, marker: MarkerComponent): Observable<T> {
        return Observable.create((observer: Observer<T>) => {
            this._markers.get(marker).then((marker: MarkerWithLabel) => {
                marker.addListener(eventName, (e: T) => this._zone.run(() => {
                    observer.next(e)
                }));
            });
        });
    }
}