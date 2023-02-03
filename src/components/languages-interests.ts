import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { when } from 'lit/directives/when.js';

import { typoStyles } from '../styles/typo-styles';
import { titleBarStyles } from '../styles/title-bar-styles';

import res from '../resume.json';


@customElement('language-interests')
export class languageInterests extends LitElement {
 
  @property()
  
  
  languages = res[0].sections.languages;
  interests = res[0].sections.interests;
  
  
  render() {
    
    return html`
      <div>
        <div class="title-bar">
            <div class="displayblock content-lang-int">
                <div class=" displayflex">
                    <h4>${this.languages.name} :</h4>
                    <ul class="liststylenone">
                        ${map(this.languages.items, (item)=> 
                          html`
                            <li class="lang-item">
                              ${when( item === this.languages.items[0], 
                                () => html`<p class="space-before"> ${item.name} (${item.level})</p>`,
                                () => html`<p class="separator-before">${item.name} (${item.level})</p>`,
                              )}
                            </li>`
                            )}
                    </ul>
                </div>
                <div class="displayflex">
                    <h4>${this.interests.name} :<span> </span></h4>
                    <ul class="liststylenone">
                        ${map(this.interests.items, (item)=> html`
                        <li class="lang-item">
                              ${when( item === this.interests.items[0], 
                                () => html`<p class="space-before"> ${item.name}</p>`,
                                () => html`<p class="separator-before">${item.name}</p>`,
                              )}
                            </li>`
                            )}
                    </ul>
                </div>
            </div>
        </div>
          
        
      </div>
  
      
    `
    
  }


  static styles = [
    typoStyles,
    titleBarStyles,
    css`
        .displayblock {
            display:block;
        }
        .displayflex {
            display:flex;
        }
        .content-lang-int{
          padding-top:1.5rem;
        }
        .lang-item { 
            padding-top:0rem;
            list-style:none;
            text-align:left;
            display: inline-flex;
        }
        .lang-item p { 
            margin-top:0rem;
        }
        .lang-content{
            margin:2rem 0;
        }
      
      
    `
  ]
}

declare global {
  interface HTMLElementTagNameMap {
    'language-interests': HTMLElement
  }
}