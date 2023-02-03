import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';

import { typoStyles } from '../styles/typo-styles';
import { titleBarStyles } from '../styles/title-bar-styles';

import res from '../resume.json';


@customElement('my-projects')
export class MyProjects extends LitElement {
 
  @property()
 
  title = res[0].sections.projects.name;
  projects:{ id?: string; url: string; date: { start: string; end: string; }; name: string; summary: string; summaryline?:any; keywords: string[]; description:string}[] = res[0].sections.projects.items;
  
  
  render() {
    let summaryArray;
    for ( let pj of this.projects){
      summaryArray = pj.summary.split("\n");
      pj.summaryline = summaryArray;
    }
    return html`
      <div>
        <div class="title-bar">
          <h2>${this.title}</h2>
        </div>
          <ul class="liststylenone work-list">
            ${map(this.projects, (pj)=> html`
                <li class="resume-item">
                        <h3 ><a href="${pj.url}">${pj.name}</a></h3>
                        <h4 >${pj.description} &bull; ${this.formatDate(pj.date.start)} - ${this.formatDate(pj.date.end)}</h4>
                        <ul class="liststylenone inline bottom-space-10">
                          ${map(pj.keywords, (i) => html`<li class="keywords">${i}</li>`)}
                        </ul>
                        <a @click=>Voir plus</a>
                        <ul class="liststylenone">
                          ${map(pj.summaryline, (i) => html`<li >${i}</li>`)}
                        </ul>
                        

                </li>`
                )}
          </ul>
        
      </div>
  
      
    `
  }

  private formatDate(date:string){
    if (date){
      let formatedDate = new Date(date);
      return formatedDate.getFullYear();
    }
    else return "Aujourd'hui";
  }


  static styles = [
    typoStyles,
    titleBarStyles,
    css`
      .resume-item { 
          margin-bottom: 2rem; 
          list-style:none;
          text-align:left;
      }
      .work-list{
        margin:2rem 0;
      }
      .work-list h3{
        font-weight:400;
      }
      .keywords {
        background-color: var(--dark-color-soft);
        color:black;
        padding:2px 5px;
        border-radius:4px;
        margin-right:8px;
      }
      
    `
  ]
}

declare global {
  interface HTMLElementTagNameMap {
    'my-projects': HTMLElement
  }
}