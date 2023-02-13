import { LitElement } from 'lit';
export declare class MyTraining extends LitElement {
    education: {
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
    formations: {
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
    title: string;
    render(): import("lit-html").TemplateResult<1>;
    private formatDate;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        'my-training': HTMLElement;
    }
}
