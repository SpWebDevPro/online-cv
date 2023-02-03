import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';

import { buttonStyles } from '../styles/button-styles';
import { typoStyles } from '../styles/typo-styles';
import { titleBarStyles } from '../styles/title-bar-styles';

import res from '../resume.json';
import avatar from '../assets/avatar.jpg';
import facebook from '../assets/icons-sn/icon-facebook.svg';
import github from '../assets/icons-sn/icon-github.svg';
import instagram from '../assets/icons-sn/icon-instagram.svg';
import linkedin from '../assets/icons-sn/icon-linkedin.svg';
import twitter from '../assets/icons-sn/icon-twitter.svg';
import website from '../assets/icons-sn/icon-website.svg';
import phone from '../assets/icons-sn/icon-phone.svg';
import email from '../assets/icons-sn/icon-email.svg';

@customElement('my-header')
export class MyHeader extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  resume = res[0];
  contactphone = this.resume.basics.phone;
  contactemail = this.resume.basics.email;
  contactwebsite = this.resume.basics.website;
  socialprofiles:{ network: string; username: string; url: string; id: string; image?:any}[] = this.resume.basics.profiles;
  socialmap = [
    { image:facebook, name:'facebook'},
    { image:github, name:'github'},
    { image:instagram, name:'instagram'},
    { image:linkedin, name:'linkedin'},
    { image:twitter, name:'twitter'},
  ]
  imageurl:string = this.getImageUrl();
  imagedisplay:string = 'block';
  width:string = '22px';


  render() {

    for (let item of this.socialprofiles){
      for (let social of this.socialmap){
        if (item.network.toLowerCase() === social.name){
          item.image = social.image;
        }
      }
    }
    
    return html`
      <div>
        <img src=${this.imageurl} alt="photo ${this.resume.basics.name}" class="avatar ${this.imagedisplay}">
        <h1 class="header-name">${this.resume.basics.name}</h1>
        <div class="title-bar">
          <h2>${this.resume.basics.headline}</h2>
          <div class="icon-links">
            <ul class=liststylenone>
              <li class="icon-link-item"><a href="tel:${this.contactphone}" ><img src=${phone} alt="${this.contactphone}" width="${this.width}" height="${this.width}" /></a></li>
              <li class="icon-link-item"><a href="mailto:${this.contactemail}" ><img src=${email} alt="${this.contactemail}" width="${this.width}" height="${this.width}" /></a></li>
            </ul>
            <ul class="liststylenone">
              ${map(this.socialprofiles, (sp)=> html`<li class="icon-link-item"><a href="${sp.url}" class="icon-link" ><img src=${sp.image} alt="${sp.network} logo" width="${this.width}" height="${this.width}" /></a></li>`)}
            </ul>
            <ul class=liststylenone>
              <li class="icon-link-item"><a href="${this.contactwebsite}" ><img src=${website} alt="${this.contactwebsite}" width="${this.width}" height="${this.width}" /></a></li>
            </ul>
          </div>
        </div>
        <div class="header-summary">
          <strong>Objectif : 
          ${this.resume.basics.objectives}</strong>
        </div>
        <div class="header-summary">
          ${this.resume.basics.summary}
        </div>
        <button>Télécharger le CV</button>
        </div>
      </div>
    `
  }

  private getImageUrl(){
    if (this.resume.basics.photo.visible){
      if (this.resume.basics.photo.url){
        this.imageurl = this.resume.basics.photo.url;
      } else if (avatar) {
        this.imageurl = avatar;
      } else {
        this.imageurl = '';
        this.imagedisplay = 'none';
      }
    } else {
      this.imageurl = '';
      this.imagedisplay = 'none';
    }
    return this.imageurl;
  }

  
  static styles = [
    buttonStyles,
    typoStyles,
    titleBarStyles,
    css`

      .header-name {
        text-align: center;
        margin: 1rem 0 0;
      }
      
      .avatar {
        width: 95px;
        max-width: 100%;
        overflow: hidden;
        margin: 0 auto;
        display: block;
        border-radius:100%;
      }
    
      .icon-links {
        margin: 0;
        padding-top: .8rem;
        padding-left: .4rem;
        display:flex;
      }
      
      .icon-link-item {
        display: inline;
        margin-left: .6rem;
      }

      .header-summary {
        margin:1.5rem 0.5rem;
      }
    
    `
  ]
}

declare global {
  interface HTMLElementTagNameMap {
    'my-header': HTMLElement
  }
}