export interface contactInfo {
	email: string;
	id: string;
	phoneNumber: string;
	fullAddress: string;
	address: Address;
	taglineText: string;
}

export interface Address {
	latitude: number;
	longitude: number;
}

export interface Pages {
	pages: Page[];
}

export interface Page {
	name: string;
	link?: string;
	sublinks?: Sublink[];
}

export interface Sublink {
	name: string;
	link: string;
}

export interface Profile {
	smallProfileBlurb: string;
	sectionOfSite: string;
	profilePicture: ProfilePicture;
	name: string;
	postiion: string;
	fullBiography: FullBiography;
}

export interface FullBiography {
	html: string;
}

export interface ProfilePicture {
	url: string;
	width: number;
	height: number;
}