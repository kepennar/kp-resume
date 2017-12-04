import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContentService } from './content.service';

import { AppComponent } from './app.component';
import { MyNameComponent } from './my-name/my-name.component';

import { ExpertisesComponent, ExpertiseComponent } from './expertises/index';
import { TechComponent } from './tech/tech.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { ExperiencesComponent, ExperienceComponent } from './experiences/index';
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
    TechComponent
  ],
  imports: [BrowserModule, HttpClientModule, FlexLayoutModule],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
