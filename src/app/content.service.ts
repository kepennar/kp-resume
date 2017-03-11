import { Injectable } from '@angular/core';
import contentful from 'contentful';

import { environment } from '../environments/environment';

@Injectable()
export class ContentService {
  client;

  constructor() {
    this.client = contentful.createClient({
      space: environment.contentful.spaceId,
      accessToken: environment.contentful.accessToken,
    });
  }

  getExpertises(): Promise<any> {
    return this.client.getEntries({content_type: 'expertises'})
    .then(resp => resp.items.map(entry => entry.fields));
  }

  getTrainings(): Promise<any> {
    return this.client.getEntries({content_type: 'trainings'})
    .then(resp => resp.items.map(entry => entry.fields));
  }

  getExperiences(): Promise<any> {
    return this.client.getEntries({content_type: 'experiences'})
    .then(resp => resp.items.map(entry => entry.fields));
  }
}
