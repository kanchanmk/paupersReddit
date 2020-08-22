import { Component, OnInit } from "@angular/core";
import { RedditService } from "../reddit.service";

import { Post } from "../interfaces/data";
@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
	subreddits: Post[];
	constructor(private service: RedditService) {}

	ngOnInit(): void {
		this.getData();
	}

	getData() {
		this.service.getAwwwData().subscribe(
			(response) => {
				console.log(response);
				this.subreddits = response.data.children;
			},
			(error) => {
				console.error(error);
			}
		);
	}
}
