import { Component, OnInit } from '@angular/core';
import { HistoryService, Team } from '../history.service';

@Component({
  selector: 'teams-grid',
  templateUrl: './teams-grid.component.html',
  styleUrls: ['./teams-grid.component.css'],
})
export class TeamsGridComponent implements OnInit {
  public teams:Team[] = [];
  
  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    // this.getTeams();
  }

  public getTeams(){
    // this.historyService.players().subscribe(data=>{
    //   console.log(data)
    // })
    // return;
    this.historyService.getTeams().subscribe((data:any)=>{
      this.teams = data.sports[0].leagues[0].teams.map((item:any)=>{
        let team = item.team
        return {
          name: team.displayName,
          abbr: team.abbreviation,
          id: team.id,
          logo: team.logos[0].href
        }
      });
    })
  }
}