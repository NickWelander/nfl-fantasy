import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsGridComponent } from './teams/teams-grid.component';
import { ScheduleComponent } from './teams/schedule/schedule.component';

const routes: Routes = [
  {path: 'teams', component: TeamsGridComponent},
  {path: 'schedule', component: ScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
