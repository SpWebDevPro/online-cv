import { LitElement } from 'lit';
export declare class MyWork extends LitElement {
    experiences: {
        name: string;
        sector: string;
        position: string;
        date: {
            start: string;
            end: string;
        };
        url: string;
        summary: string;
        summaryline?: any;
        achievements: string;
        achievementline?: any;
        id: string;
    }[];
    title: string;
    render(): import("lit-html").TemplateResult<1>;
    private formatDate;
    private checkDisplayLinkUrl;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        'my-work': HTMLElement;
    }
}
