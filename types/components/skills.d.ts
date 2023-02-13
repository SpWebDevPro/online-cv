import { LitElement } from 'lit';
export declare class MySkills extends LitElement {
    title: string;
    subtitle1: string;
    subtitle2: string;
    skillgroupe1: string[];
    skillgroupe2: string[];
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        'my-skills': HTMLElement;
    }
}
