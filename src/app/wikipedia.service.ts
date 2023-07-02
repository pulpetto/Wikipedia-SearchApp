import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class WikipediaService {
    constructor(private http: HttpClient) {}

    public search(term: string) {
        return this.http.get(
            'https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=space&limit=5&namespace=0&format=json',
            {
                params: {
                    action: 'query',
                    format: 'json',
                    list: 'search',
                    utf: '1',
                    srsearch: term,
                    origin: '*',
                },
            }
        );
    }
}
