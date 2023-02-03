import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { typoStyles } from './styles/typo-styles';

import './components/header';
import './components/work';
import './components/skills';
import './components/technos';
import './components/formations';
import './components/projets';
import './components/languages-interests';

import res from './resume.json';


@customElement('my-element')
export class MyElement extends LitElement {

  @property()
  resume = res[0];


  render() {
    return html`
    <my-header></my-header>
    <my-skills></my-skills>
    <my-technos></my-technos>
    <my-work></my-work>
    <my-training></my-training>
    <my-projects></my-projects>
    <language-interests></language-interests>
      
    `
  }

  static styles = [
    typoStyles,
    css`
    :host {
      max-width: 52%;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
  `
  ]
  
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
