import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';

import { typoStyles } from '../styles/typo-styles';
import { titleBarStyles } from '../styles/title-bar-styles';

import res from '../resume.json';


@customElement('my-training')
export class MyTraining extends LitElement {
 
  @property()
  education = res[0].sections.education.items;
  formations = res[0].sections.certifications.items;
  title = res[0].sections.education.name;
 
  
  
  render() {
    return html`
      <div>
        <div class="title-bar">
          <h2>${this.title}</h2>
        </div>
        <div class="formation-container">
        <ul class="liststylenone formations-list">
            ${map(this.formations, ((fm)=> html`
                <li class="resume-item">
                        <h3 >${fm.issuer}</h3>
                        <h4 >${fm.name} &bull; <span class="formation-date">${this.formatDate(fm.date.start)}</span><span id="tiret"> - </span><span class="formation-date">${this.formatDate(fm.date.end)}</span></h4>
                </li>`
                ))}
          </ul>
          <ul class="liststylenone formations-list">
            ${map(this.education, ((ed) => html`
                <li class="resume-item">
                        <h3 >${ed.institution}</h3>
                        <h4 >${ed.degree} &bull; <span class="formation-date">${this.formatDate(ed.date.start)}</span><span class="formation-date"> - ${this.formatDate(ed.date.end)}</span></h4>
                </li>`
                ))}
          </ul>
        </div>
      </div>
  
    `
  }

  private formatDate(date:string){
    if (date !== "Aujourd'hui" && date !== ''){
      let formatedDate = new Date(date);
      return formatedDate.getFullYear();
    } else if (date === "Aujourd'hui"){
      return " - Aujourd'hui";
    }
    else {
      return "";
    }
  }

 

  static styles = [

    typoStyles,
    titleBarStyles,
    css`
      .formation-container {
        display:inline-grid;
        grid-template-columns: 50% 50%;
        column-gap:2rem;
      }
      .resume-item { 
          margin-bottom: 2rem; 
          list-style:none;
          text-align:left;
      }
      .formations-list{
        margin:2rem 0;
      }
      .formations-list h3{
        font-weight:400;
      }
      .formation-date {
        font-weight:400;
      }
      @media all and (max-width:765px){
        .formation-container{
          margin-top:2rem;
          grid-template-columns: 100%;
        }
        .formations-list{
          margin:0rem 0;
        }
      }
      #tiret{
        display:none;
      }
      
    `
  ]
}

declare global {
  interface HTMLElementTagNameMap {
    'my-training': HTMLElement
  }
}