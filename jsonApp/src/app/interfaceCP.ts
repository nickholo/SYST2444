export interface Program {
	programName: string;
	shortName: string;
	schedule: string;
	credential: string;
}

export interface Courses {
	term: number;
	class: string;
	credit: number;
	description: string;
}
