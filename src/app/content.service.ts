import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';

@Injectable()
export class ContentService {

  constructor(private http: Http) { }

  getExpertises(): Observable<any> {
    return this.getContentFulEntries('expertises')
    .map(expertise => expertise.sort(this.sortPerRank));
  }

  getTrainings(): Observable<any> {
    return this.getContentFulEntries('trainings');
  }

  getExperiences(): Observable<any> {
    return this.getContentFulEntries('experiences')
    .map(experiences => experiences.sort(this.sortPerRank));
  }

  private getContentFulEntries(contentType) {
    const { baseUrl, spaceId, accessToken } = environment.contentful;

    return this.http.get(`${baseUrl}/spaces/${spaceId}/entries?access_token=${accessToken}&content_type=${contentType}`)
    .map(resp => resp.json())
    .map(entries => entries.items.map(entry => entry.fields));
  }
  private sortPerRank(entry1, entry2) {
    return entry1.rank - entry2.rank;
  }
}
