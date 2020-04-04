export interface Project {
    startMonth: number;
    startYear: number;
    endMonth: number;
    endYear: number;

    projectGroup: string;

    logo: string;
    company: string;
    employed: boolean;

    position: string;
    locations: string[];
    description: string;
    url?: string;
}

export interface Techno {
    knowledge: number;
    name: string;
    years: number;
}

export interface CompanyGroup {
    group: string;
    contract: string;
    company: string;
}

export interface CompanyView {
    companyGroup: CompanyGroup;
    yearStart: number;
    yearEnd: number;
    citiesStr: string;
    companies: string[];
}

export interface ProjectView {
    proj: Project;
    companyName: string;
    img: string;
    locs: string
}

export interface Language {
    name: string;
    level: string;
    desc: string;
}