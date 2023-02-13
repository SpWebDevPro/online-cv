import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { repeat } from 'lit/directives/repeat.js';

import { typoStyles } from '../styles/typo-styles';
import { titleBarStyles } from '../styles/title-bar-styles';

import res from '../resume.json';


@customElement('my-projects')
export class MyProjects extends LitElement {

  
  @property()
  title = res[0].sections.projects.name;
  projects:{ id?: string; url: string; date: { start: string; end: string; }; name: string; summary: string; summaryline?:any; keywords: string[]; selected?:Boolean, description:string}[] = res[0].sections.projects.items;
  
  @property({type:HTMLElement, reflect:true})
  tiret!:HTMLElement 

  constructor(){
    super();
    this.tiret = document.createElement('span');
    this.tiret.innerText = ' - ';
  }
 

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
            ${repeat(this.projects, (pj)=> html`
                <li class="resume-item">
                        <h3 ><a href="${pj.url}">${pj.name}</a></h3>
                        <h4 >${pj.description} &bull; <span class="formation-date">${this.formatDate(pj.date.start)}</span><span class="formation-date"> <span id="tiret"> - </span> ${this.formatDate(pj.date.end)}</span></h4>
                        <ul class="liststylenone inline bottom-space-10">
                          ${map(pj.keywords, (i) => html`<li class="keywords">${i}</li>`)}
                        </ul>
                          <ul class="liststylenone">
                            ${map(pj.summaryline, (i) => html`<li class='projet-sum'>${i}</li>`)}
                          </ul>
                </li>`
                )}
          </ul>
      </div>
    `
  }

  private formatDate(date:string){
    if (date !== "Aujourd'hui" && date !== ''){
      this.tiret.innerText= ' - ';
      let formatedDate = new Date(date);
      return formatedDate.getFullYear();
      
    } else if (date === "Aujourd'hui"){
      return " - Aujourd'hui";
    }
    else {
      this.tiret.innerText= '';
      return "";
    }
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
        padding:0.125rem 0.3rem;
        border-radius:0.25rem;
        margin-right:0.5rem;
      }
      @media all and (max-width:765px){
        .inline {
          display:inline-flex;
          flex-wrap:wrap;
        }
        .keywords{
          margin-bottom:0.5rem;
        }
      }
      #tiret{
        display:none;
      }
      .projet-sum{
        overflow-wrap:anywhere;
      }
      
    `
  ]
}

declare global {
  interface HTMLElementTagNameMap {
    'my-projects': HTMLElement
  }
}

