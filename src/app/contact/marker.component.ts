import { Component, EventEmitter, ElementRef, Input, Output, OnChanges } from '@angular/core';
import { MarkerManager } from './marker.manager';

@Component({
    selector: 'custom-map-marker',
    template: `
        <div class="Marker" [class.Marker--viewed]="isViewed" [attr.data-marker-address-id]="addressId">
            <div class="Marker__point">
                <span [hidden]="markersInCluster === 1">
                    {{ markersInCluster }}
                </span>
            </div>
            <div class="Marker__content">
                <span>{{ label }}</span> <span>€</span>
            </div>
        </div>
    `,
    providers: [ MarkerManager ]
})


export class MarkerComponent implements OnChanges
{
    /**
     * Status of current marker
     * @type {boolean}
     */
    @Input() isViewed: boolean = false;

    /**
     * Number of markers in cluster
     */
    @Input() markersInCluster: number;

    /**
     * Hashed address ID that is bound to current marker
     */
    @Input() addressId: string;

    /**
     * The latitude position of the marker.
     */
    @Input() lat: number;

    /**
     * The longitude position of the marker.
     */
    @Input() lng: number;

    /**
     * Label that is shown inside of marker
     */
    @Input() label: string;

    /**
     * This event emitter gets emitted when the user clicks on the marker.
     */
    @Output() markerClick = new EventEmitter();

    /**
     * Indicates if marker was already added
     * @type {boolean}
     * @private
     */
    private _markerAddedToManger: boolean = false;

    /**
     * Unique marker identifier. Usually it is addressId from server.
     */
    // private _id: string;

    /**
     * MarkerComponent constructor.
     * @param _elementRef
     * @param _markerManager
     */
    constructor (
        private _elementRef: ElementRef,
        private _markerManager: MarkerManager
    ) {
        // markerIdentifier = 'marker-' + this.addressId;
        // this._id = 'marker-' + this.addressId;
    }

    /**
     *
     */
    ngOnChanges() {
        this._markerManager.addMarker(this, this._elementRef);
        this._markerAddedToManger = true;
        this._addEventListeners();
    }

    /**
     * Adds "click" listener to current marker
     */
    private _addEventListeners() {
        this._markerManager.createEventObservable('click', this).subscribe(() => {
            this.markerClick.emit(this);
        });
    }
}