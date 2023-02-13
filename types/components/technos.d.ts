import { LitElement } from 'lit';
import Techno from './techno-class';
export declare class MyTechnos extends LitElement {
    technos: string[];
    technosPath: string[];
    technoMap: Array<Techno>;
    withLogo: string;
    render(): import("lit-html").TemplateResult<1>;
    private checkTechnoName;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        'my-technos': HTMLElement;
    }
}
