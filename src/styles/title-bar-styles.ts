import { css } from 'lit';

export const titleBarStyles = css`
    .title-bar {
        min-width:100%;
        margin-top: 2rem;
        padding: .4rem 0;
        border-top: 0.25rem solid var(--dark-color-soft);
        border-bottom: 0.125rem solid var(--dark-color-soft);
        display:inline-flex;
        justify-content: space-between;
        align-content:center;
    }
    @media all and (max-width:765px){
        .title-bar{
            display:block;
            justify-content:center;
        }
    }
`