import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';

import { buttonStyles } from '../styles/button-styles';
import { typoStyles } from '../styles/typo-styles';
import { titleBarStyles } from '../styles/title-bar-styles';

import res from '../resume.json';


@customElement('my-training')
export class MyTraining extends LitElement {
 
  @property()
  education = res[0].sections.education.items;
  formations = res[0].sections.certifications.items;
  title = res[0].sections.education.name;
  idEl = document.getElementById('toto');
  
  
  render() {
    return html`
      <div>
        <div class="title-bar">
          <h2>${this.title}</h2>
        </div>
        <div class="formation-container">
        <ul class="liststylenone formations-list">
            ${map(this.formations, ((fm, index)=> html`
                <li class="resume-item">
                        <h3 >${fm.issuer}</h3>
                        <h4 >${fm.name} &bull; <span class="formation-date">${this.formatDate(fm.date.start, index.toString())}</span><span id="toto"> - </span><span class="formation-date">${this.formatDate(fm.date.end, index.toString())}</span></h4>
                </li>`
                ))}
          </ul>
          <ul class="liststylenone formations-list">
            ${map(this.education, ((ed, index) => html`
                <li class="resume-item">
                        <h3 >${ed.institution}</h3>
                        <h4 >${ed.degree} &bull; <span class="formation-date">${this.formatDate(ed.date.start, index.toString())}</span><span id="${index.toString()}"> - </span> <span class="formation-date">${this.formatDate(ed.date.end, index.toString())}</span></h4>
        
                </li>`
                ))}
          </ul>
        </div>
      </div>
  
    `
  }

  private formatDate(date:string, id:string){
    console.log('id string quoi quil arrive ', id );
    if (date !== "Aujourd'hui" && date !== ''){
      let formatedDate = new Date(date);
      return formatedDate.getFullYear();
    } else if (date === "Aujourd'hui"){
      return " - Aujourd'hui";
    }
    else {
      if (this.idEl){
        this.idEl.style.display = 'none';
      }
      
      
      return "";
    }
  }

 

  static styles = [
    buttonStyles,
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
      #toto{
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