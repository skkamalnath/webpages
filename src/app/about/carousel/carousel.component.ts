import { Component } from '@angular/core';
import {Image} from './image.interface';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent {
    //images data to be bound to the template
	public images = IMAGES;
}

var IMAGES: Image[] = [
	{ "title": "Image 1", "url": "/assets/images/art1.jpg" },
	{ "title": "Image 2", "url": "/assets/images/art2.jpg" },
	{ "title": "Image 3", "url": "/assets/images/art3.jpg" },
	{ "title": "Image 4", "url": "/assets/images/art4.jpg" },
	{ "title": "Image 5", "url": "/assets/images/art5.jpg" }	
];