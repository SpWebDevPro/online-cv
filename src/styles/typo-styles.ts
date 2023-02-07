import { css } from 'lit';

export const typoStyles = css`


  h1 {
    font-size: 2rem;
    line-height: 1.2;
    letter-spacing: -.04rem;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.2;
    letter-spacing: -.04rem;
    margin:0;
    padding-top: .4rem;
  }

  h3 {
    margin: 0 0 .3rem;
    font-size: 1.125rem;
    letter-spacing: -.04rem;
    line-height: 1.2;
    font-weight:500;
  }

  h4 {
    font-size: 1.08rem;
    margin: 0 0 .6rem;
    line-height: 1.2;
    font-weight:600;
  }


  .liststylenone {
    list-style:none;
    padding-inline-start: 0rem;
    margin:0;
  }

  .liststylearrow {
    text-align:left;
    padding-inline-start: 1.25rem;
  }

  .liststylearrow li:before{
    margin-right:0.5rem;
    left:0;
  }


  .separator-before::before{
    content:"- ";
  }

  .space-before::before{
    content:"\u00a0";
  }

  .displayflex {
    display:flex;
  }
  
  .inline {
    display:inline-flex;
  }


  .bottom-space-10 {
    padding-bottom:0.625;
  }


`;



