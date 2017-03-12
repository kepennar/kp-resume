import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContentService } from './content.service';

import { AppComponent } from './app.component';
import { MyNameComponent } from './my-name/my-name.component';

import { ExpertisesComponent } from './expertises/expertises.component';
import { ExpertiseComponent } from './expertises/expertise/expertise.component';
import { TechComponent } from './tech/tech.component';

import { TrainingsComponent } from './trainings/trainings.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ExperienceComponent } from './experiences/experience/experience.component';
import { CreditsComponent } from './credits/credits.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNameComponent,
    ExpertisesComponent,
    ExpertiseComponent,
    TrainingsComponent,
    ExperiencesComponent,
    ExperienceComponent,
    CreditsComponent,
    TechComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FlexLayoutModule,
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
