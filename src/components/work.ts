import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';

import { buttonStyles } from '../styles/button-styles';
import { typoStyles } from '../styles/typo-styles';
import { titleBarStyles } from '../styles/title-bar-styles';

import res from '../resume.json';


@customElement('my-work')
export class MyWork extends LitElement {
 
  @property()
  experiences:{ name: string; sector:string; position: string; date: { start: string; end: string; }; url: string; summary: string; summaryline?:any; achievements:string, achievementline?:any, id: string;}[] = res[0].sections.work.items;
  title = res[0].sections.work.name;

  
  render() {
    let summaryArray;
    for ( let ex of this.experiences){
      summaryArray = ex.summary.split("\n");
      ex.summaryline = summaryArray;
    }
    let achievementArray;
    for ( let ex of this.experiences){
      achievementArray = ex.achievements.split("\n");
      ex.achievementline = achievementArray;
    }
    return html`
      <div>
        <div class="title-bar">
          <h2>${this.title}</h2>
        </div>
          <ul class="liststylenone work-list">
            ${map(this.experiences, (ex)=> html`
                <li class="resume-item">
                  ${this.checkDisplayLinkUrl(ex.url)
                  ? html`
                    <h3><a href=${ex.url}>${ex.name}</a></h3>
                  `
                  : html`
                    <h3>${ex.name}</h3>
                  `
                        }
                        <i>${ex.sector}</i>
                        <h4>${ex.position} &bull; ${this.formatDate(ex.date.start)} - ${this.formatDate(ex.date.end)}</h4>
                        <ul class="liststylenone summary">
                          ${map(ex.summaryline, (i) => html`<li >${i}</li>`)}
                        </ul>
                        <ul class="liststylenone">
                          ${map(ex.achievementline, (i) => html`<li >${i}</li>`)}
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

  private checkDisplayLinkUrl(url:string){
    if (url === ""){
      return false;
    } else {
      return true;
    }
  }


  static styles = [
    buttonStyles,
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
        margin-bottom:0.3rem;
      }
      i{
        padding-top:0;
      }
      h4 {
        padding-top:0.1rem;
        margin-bottom:0.3rem;
      }
      .summary {
        padding-bottom:0.3rem;
        font-weight:500;
      }
      @media all and (max-width:765px){
        .work-list{
          margin-bottom:3rem;
        }
      }
     
      
    `
  ]
}

declare global {
  interface HTMLElementTagNameMap {
    'my-work': HTMLElement
  }
}