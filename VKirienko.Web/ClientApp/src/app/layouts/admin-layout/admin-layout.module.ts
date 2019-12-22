import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardOldComponent } from '../../dashboard-old/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { AboutComponent } from '../../about/about.component';
import { ContactsComponent } from '../../contacts/contacts.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { FlightsComponent } from '../../flights/flights.component';
import { ResumeComponent } from '../../resume/resume.component';
import { SecurityComponent } from '../../security/security.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    FontAwesomeModule,
  ],
  declarations: [
    DashboardOldComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
	  AboutComponent,
    ContactsComponent,
    FlightsComponent,
    SecurityComponent,
    DashboardComponent,
	  ResumeComponent
  ]
})

export class AdminLayoutModule {
}
