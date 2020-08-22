import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Data } from "./interfaces/data";

@Injectable({
	providedIn: "root",
})
export class RedditService {
	constructor(private http: HttpClient) {}

	getAwwwData() {
		return this.http.get<Data>("https://www.reddit.com/r/aww/.json");
	}
}
