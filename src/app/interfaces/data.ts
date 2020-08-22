export interface Data {
	data: Record;
}

export interface Record {
	children: Post[];
}

export interface Post {
	title: string;
	url: string;
	thumbnail: string;
}
