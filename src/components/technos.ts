import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';

import { typoStyles } from '../styles/typo-styles';
import { titleBarStyles } from '../styles/title-bar-styles';

import Techno  from './techno-class';
import Angular from '../assets/icons-technos/Angular.png';
import CSS from '../assets/icons-technos/CSS.png';
import Git from '../assets/icons-technos/Git.png';
import GoogleAppScript from '../assets/icons-technos/GoogleAppScript.png';
import HTML from '../assets/icons-technos/HTML.png';
import Javascript from '../assets/icons-technos/Javascript.png';
import LitJs from '../assets/icons-technos/LitJs.png';
import NodeJS from '../assets/icons-technos/NodeJS.png';
import PWA from '../assets/icons-technos/PWA.png';
import Rxjs from '../assets/icons-technos/Rxjs.png';
import Typescript from '../assets/icons-technos/Typescript.png';
import ViteJs from '../assets/icons-technos/ViteJs.png';
import VueJs from '../assets/icons-technos/VueJs.png';
import Wordpress from '../assets/icons-technos/Wordpress.png';

import res from '../resume.json';


@customElement('my-technos')
export class MyTechnos extends LitElement {

  @property()
  technos = res[0].sections.skills.items[1].keywords;
  technosPath = [Angular, CSS, Git, GoogleAppScript, HTML, Javascript, LitJs, NodeJS, PWA, Rxjs, Typescript, ViteJs, VueJs, Wordpress];
  technoMap:Array<Techno>= [];
  withLogo = '35';
  
  render() {

    for (let tech of this.technos) {
      
      for (let techpath of this.technosPath) {
        if (this.checkTechnoName(techpath) === tech){
          let newTech = new Techno(tech, techpath);
          this.technoMap.push(newTech);
        } 
      }
    }

    return html`
      <div class="techno-list">
          <ul class="liststylenone displayflex displaywrap center">
          ${map(this.technoMap, (tech)=> html`<li class="logo-tech"><img src=${tech.image} alt="${tech.name} logo" width=${this.withLogo} height=${this.withLogo} /></li>`)}
        </ul>
      </div>
    `
  }

  private checkTechnoName(path:any){
    let technoName = path.split('/').pop().split('.');
    return technoName[0];
  }

  static styles = [
    typoStyles,
    titleBarStyles,
    css`
      .center{
        justify-content:space-around;
      }
      .logo-tech{
        margin:0.2rem;
      }
      .techno-list{
        margin: 0;
      }
      .displaywrap{
        flex-wrap:nowrap;
      }
      @media all and (max-width:1300px){
        .center{
          justify-content:center;
        }
        .displaywrap {
          flex-wrap:wrap;
        }
        
      }
      @media all and (max-width:480px){
        .techno-list{
          padding-top: 1rem;
        }
      }
    `
  ]
}

declare global {
  interface HTMLElementTagNameMap {
    'my-technos': HTMLElement
  }
}