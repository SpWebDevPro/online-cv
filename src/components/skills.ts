import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';


import { typoStyles } from '../styles/typo-styles';
import { titleBarStyles } from '../styles/title-bar-styles';

import res from '../resume.json';


@customElement('my-skills')
export class MySkills extends LitElement {
 
  @property()
  title = res[0].sections.skills.name;
  subtitle1 = res[0].sections.skills.items[0].name;
  subtitle2 = res[0].sections.skills.items[2].name;
  skillgroupe1 = res[0].sections.skills.items[0].keywords;
  skillgroupe2 = res[0].sections.skills.items[2].keywords;
  
  
  render() {
    
    return html`
      <div>
        <div class="title-bar">
          <h2>${this.title}</h2>
        </div>
        <div class="displayflex center skill-list">
          <div class="skills-sublist">
            <h3>${this.subtitle1}</h3>
            <ul class ="liststylearrow" >
              ${this.skillgroupe1.map((skill) => 
                  html `<li>${skill}</li>`
              )}
            </ul>
          </div>
          <div class="skills-sublist">
            <h3>${this.subtitle2}</h3>
            <ul class ="liststylearrow">
              ${this.skillgroupe2.map((skill) => 
                  html `<li>${skill}</li>`
              )}
            </ul>
          </div>
          </div>
      </div>
  
      
    `
  }

 

  static styles = [
    typoStyles,
    titleBarStyles,
    css`
        .displayflex {
            display:flex;
        }
        .center{
            justify-content:center;
        }
        .skill-list{
            margin:2rem ;
        }
        @media all and (max-width:980px){
          .skill-list{
            margin:2rem 0;
          }
        }
        .skills-sublist{
          width:50%;
        }
        .skills-sublist h3 {
          font-size:1.125rem;
          text-align:left;
        }
        @media all and (max-width:480px){
          .skill-list{
            display:block;
    
          }
          .skills-sublist{
            width:100%;
            padding-top:1.2rem;
          }
          .skills-sublist h3{
            text-align:center;
          }
          .skills-sublist ul{
            text-align:center;
            list-style-type:none;
            padding-inline-start:0rem;
          }

        }
       

    `
  ]
}

declare global {
  interface HTMLElementTagNameMap {
    'my-skills': HTMLElement
  }
}