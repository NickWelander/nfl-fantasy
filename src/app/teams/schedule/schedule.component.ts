import { Component, OnInit } from '@angular/core';
import { HistoryService, Team } from '../../history.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  private teamId:string = ""
  public schedule:any = [];
  public team: Team =  {name: "", abbr: "", id: "", logo: ""};
  
  constructor(
    private historyService: HistoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.teamId = this.route.snapshot.queryParams['team'];
  }

  public getSchedule(){
    this.historyService.getSchedule(this.teamId).subscribe((data:any)=>{
      this.schedule = data.events.map((event:any,i:number)=>{
        return {
          week: event.week.number,
          date: new Date(event.date),
          final: event.competitions[0].status.type.completed,
          teams: event.competitions[0].competitors,
        }
      })
    })
  }
}