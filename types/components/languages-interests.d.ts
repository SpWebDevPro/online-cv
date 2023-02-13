import { LitElement } from 'lit';
export declare class languageInterests extends LitElement {
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
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        'language-interests': HTMLElement;
    }
}
