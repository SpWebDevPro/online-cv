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
      <p class="bottom-info">Ce site a été dévéloppé en Javascript, HTML et CSS avec Lit et Vite</p>
    `
  }

  static styles = [
    typoStyles,
    css`
    :host {
      max-width: 55%;
      margin: 0 auto;
      padding: 2rem 0;
      text-align: center;
      overflow-wrap:anywhere;
    }

    @media all and (min-width:765px) and (max-width:1050px){
      :host {
        min-width: 75%;
      }
    }
    @media all and (min-width:480px) and (max-width:764px){
      :host {
        min-width: 80%;
      }
    }
    @media all and (max-width:479px){
      :host {
        min-width: 90%;
      }
    }
    .bottom-info {
      margin-top:3.125rem;
      font-size:0.9rem;
      margin-bottom:0;
    }
  `
  ]
  
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
