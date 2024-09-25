import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamCardComponent } from './teams/team-card.component';
import { TeamsGridComponent } from './teams/teams-grid.component';
import { ScheduleComponent } from './teams/schedule/schedule.component';
import { ScheduleCardComponent } from './teams/schedule/schedule-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    ScheduleCardComponent,
    TeamsGridComponent,
    TeamCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
