import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { environment } from '../environments/environment';

@Injectable()
export class ContentService {
  constructor(private http: HttpClient) {}

  getExpertises() {
    return this.getContentFulEntries('expertises').pipe(
      map(expertise => expertise.sort(this.sortPerRank))
    );
  }

  getTrainings() {
    return this.getContentFulEntries('trainings');
  }

  getExperiences() {
    return this.getContentFulEntries('experiences').pipe(
      map(experiences => experiences.sort(this.sortPerRank))
    );
  }

  private getContentFulEntries(contentType) {
    const { baseUrl, spaceId, accessToken } = environment.contentful;

    return this.http
      .get<any>(
        `${baseUrl}/spaces/${spaceId}/entries?access_token=${accessToken}&content_type=${contentType}&include=1`
      )
      .pipe(map(entries => entries.items.map(entry => entry.fields)));
  }
  private sortPerRank(entry1, entry2) {
    return entry1.rank - entry2.rank;
  }
}
