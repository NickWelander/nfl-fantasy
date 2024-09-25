import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs';

export interface Team {
  id: string;
  name: string;
  logo: string;
  abbr: string;
}

@Injectable({
  providedIn: 'root',
})

export class HistoryService {
  public fantasyUrl:string = "https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/2024/segments/0/leagues";
  private nflUrl: string = "https://site.api.espn.com/apis/site/v2/sports/football/nfl"
  private leagueId:string = "1031360";
  public httpOptions = {};
  teams: any;

  constructor(private http: HttpClient) { }

  public getTeams(){
    // let params = {seasonId: "2023", view: "mTeam"}
    return this.http.get(`${this.nflUrl}/teams`);
  }
  
  public getSchedule(team:string){
    return this.http.get(`${this.nflUrl}/teams/${team}/schedule?season=2024`);
  }

  public getLeagueInfo(){
    let params = {
      view: 'mPositionalRatings'
      // view=mRoster
      // view=mSettings
      // view=mTeam
      // view=modular
      // view=mNav
    }
    return this.http.get(`${this.fantasyUrl}/${this.leagueId}`, {params})
  }

  public players(){
    let filter = {
      "players": {
        "filterStatus": {"value": ["FREEAGENT","WAIVERS"]        },
        "filterSlotIds": {"value":[16]},
        "filterRanksForScoringPeriodIds": {"value":[3]},
        "limit":50,
        "offset":0,
        "sortPercOwned": {"sortAsc":false,"sortPriority":1},
        "sortDraftRanks":{"sortPriority":100,"sortAsc":true,"value":"STANDARD"},
        "filterRanksForRankTypes": {"value": ["PPR"]},
        "filterRanksForSlotIds":{"value":[0,2,4,6,17,16,8,9,10,12,13,24,11,14,15]},
        "filterStatsForTopScoringPeriodIds":{
          "value":2,
          "additionalValue":["002024","102024","002023","1120243","022024"]
        }
      }
    }
    let headers:any = {
      "x-fantasy-filter": filter,
      Authorization: 'Bearer eyJraWQiOiJndWVzdGNvbnRyb2xsZXItLTE2MjAxOTM1NDQiLCJhbGciOiJFUzI1NiJ9.eyJqdGkiOiJjTV9WOGZmZXdUdlh2WU1YYldQRXdnIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLnJlZ2lzdGVyZGlzbmV5LmdvLmNvbSIsImF1ZCI6InVybjpkaXNuZXk6b25laWQ6cHJvZCIsImlhdCI6MTcyNjg2NTkyNCwibmJmIjoxNzI2ODY1OTI0LCJleHAiOjE3MjY5NTIzMjQsImNsaWVudF9pZCI6IkVTUE4tT05FU0lURS5XRUItUFJPRCIsImNhdCI6Imd1ZXN0IiwibGlkIjoiOWIwNDRiY2UtZTVjYy00NmZkLTlhMzEtN2I5Mjc0OTJmYWZjIiwiaWRlbnRpdHlfaWQiOiI5OWVjNDFmNC04Zjg0LTRiMmUtYjk5Yi05OTA5MDgzMTExMDkiLCJzdWIiOiJ7OEM2OUMxNUUtNzU1Ri00MDhFLUE5QzEtNUU3NTVGRDA4RUUzfSJ9.NOKTh-EwZoswjcziNvj2dU87G9SevQFJAjnWwXsgkGYSdsZqLoZJGG0cuZzYIoHOZW6uPHKmfBGGW9y2k5VNzA',
      'Content-Type': 'application/json'
    }
    headers = new HttpHeaders(headers);
    
    return this.http.get(`${this.fantasyUrl}/${this.leagueId}`, headers)
  }
}