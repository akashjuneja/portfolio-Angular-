import { Component, Input, OnInit } from '@angular/core';
import { faDatabase, faEnvelope, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 faEnvelope =faEnvelope
 faMapMarkedAlt =faMapMarkedAlt
 faPhone =faPhone
 faDatabase = faDatabase
  @Input() user: any
  constructor() { }

  ngOnInit(): void {
  }

}
