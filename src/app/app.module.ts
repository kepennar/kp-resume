import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { SideComponent } from './side';
import { ContentService } from './content.service';
import { CreditsComponent } from './credits/credits.component';
import { ExperienceComponent, ExperiencesComponent } from './experiences/index';
import { ExpertiseComponent, ExpertisesComponent } from './expertises/index';
import { MyNameComponent } from './my-name/my-name.component';
import { TechComponent } from './tech/tech.component';
import { TrainingsComponent } from './trainings/trainings.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNameComponent,
    SideComponent,
    ExpertisesComponent,
    ExpertiseComponent,
    TrainingsComponent,
    ExperiencesComponent,
    ExperienceComponent,
    CreditsComponent,
    TechComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.serviceWorker
    })
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
