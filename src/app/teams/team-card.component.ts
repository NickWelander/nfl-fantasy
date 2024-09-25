import { Component, Input } from '@angular/core';
import { Team } from '../history.service';

@Component({
  selector: 'team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css'],
})
export class TeamCardComponent {  
  @Input() team: Team = {name: "", abbr: "", id: "", logo: ""};
  private errorImg:string = "../../assets/img-error.png"

  
}