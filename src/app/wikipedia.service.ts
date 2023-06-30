import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class WikipediaService {
    constructor(private wikipedia: WikipediaService) {}

    public search(term: string) {
        const results = this.wikipedia.search(term);
    }
}
