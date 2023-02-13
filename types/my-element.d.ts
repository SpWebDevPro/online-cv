import { LitElement } from 'lit';
import './components/header';
import './components/work';
import './components/skills';
import './components/technos';
import './components/formations';
import './components/projets';
import './components/languages-interests';
export declare class MyElement extends LitElement {
    resume: {
        basics: {
            name: string;
            email: string;
            phone: string;
            photo: {
                url: string;
                filters: {
                    size: number;
                    shape: string;
                    border: boolean;
                    grayscale: boolean;
                };
                visible: boolean;
            };
            objectives: string;
            summary: string;
            website: string;
            headline: string;
            location: {
                city: string;
                region: string;
                address: string;
                country: string;
                postalCode: string;
            };
            profiles: {
                network: string;
                username: string;
                url: string;
                id: string;
            }[];
            birthdate: string;
        };
        sections: {
            work: {
                id: string;
                name: string;
                type: string;
                items: {
                    name: string;
                    sector: string;
                    position: string;
                    date: {
                        start: string;
                        end: string;
                    };
                    url: string;
                    summary: string;
                    achievements: string;
                    id: string;
                }[];
                columns: number;
                visible: boolean;
            };
            awards: {
                id: string;
                name: string;
                type: string;
                items: never[];
                columns: number;
                visible: boolean;
            };
            skills: {
                id: string;
                name: string;
                type: string;
                items: {
                    name: string;
                    level: string;
                    levelNum: number;
                    keywords: string[];
                    id: string;
                }[];
                columns: number;
                visible: boolean;
            };
            projects: {
                id: string;
                name: string;
                type: string;
                items: {
                    id: string;
                    url: string;
                    date: {
                        end: string;
                        start: string;
                    };
                    name: string;
                    summary: string;
                    keywords: string[];
                    description: string;
                }[];
                columns: number;
                visible: boolean;
            };
            education: {
                id: string;
                name: string;
                type: string;
                items: {
                    id: string;
                    url: string;
                    area: string;
                    date: {
                        end: string;
                        start: string;
                    };
                    score: string;
                    degree: string;
                    courses: never[];
                    summary: string;
                    institution: string;
                }[];
                columns: number;
                visible: boolean;
            };
            interests: {
                id: string;
                name: string;
                type: string;
                items: {
                    name: string;
                    keywords: never[];
                    id: string;
                }[];
                columns: null;
                visible: boolean;
            };
            languages: {
                id: string;
                name: string;
                type: string;
                items: {
                    id: string;
                    name: string;
                    level: string;
                    levelNum: number;
                }[];
                columns: number;
                visible: boolean;
            };
            volunteer: {
                id: string;
                name: string;
                type: string;
                items: {
                    organization: string;
                    position: string;
                    date: {
                        start: string;
                        end: string;
                    };
                    url: string;
                    summary: string;
                    id: string;
                }[];
                columns: number;
                visible: boolean;
            };
            references: {
                id: string;
                name: string;
                type: string;
                items: never[];
                columns: number;
                visible: boolean;
            };
            publications: {
                id: string;
                name: string;
                type: string;
                items: never[];
                columns: number;
                visible: boolean;
            };
            certifications: {
                id: string;
                name: string;
                type: string;
                items: {
                    id: string;
                    url: string;
                    date: {
                        end: string;
                        start: string;
                    };
                    name: string;
                    issuer: string;
                    summary: string;
                }[];
                columns: number;
                visible: boolean;
            };
        };
        metadata: {
            css: {
                value: string;
                visible: boolean;
            };
            date: {
                format: string;
            };
            page: {
                format: string;
            };
            theme: {
                text: string;
                primary: string;
                background: string;
            };
            layout: string[][][];
            locale: string;
            template: string;
            typography: {
                size: {
                    body: number;
                    heading: number;
                };
                family: {
                    body: string;
                    heading: string;
                };
            };
        };
        public: boolean;
    };
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        'my-element': MyElement;
    }
}
