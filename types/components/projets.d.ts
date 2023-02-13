import { LitElement } from 'lit';
export declare class MyProjects extends LitElement {
    title: string;
    projects: {
        id?: string;
        url: string;
        date: {
            start: string;
            end: string;
        };
        name: string;
        summary: string;
        summaryline?: any;
        keywords: string[];
        selected?: Boolean;
        description: string;
    }[];
    tiret: HTMLElement;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    private formatDate;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        'my-projects': HTMLElement;
    }
}
