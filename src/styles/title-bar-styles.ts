import { css } from 'lit';

export const titleBarStyles = css`
    .title-bar {
        min-width:100%;
        margin-top: 2rem;
        padding: .4rem 0;
        border-top: 4px solid var(--dark-color-soft);
        border-bottom: 2px solid var(--dark-color-soft);
        display:inline-flex;
        justify-content: space-between;
        align-content:center;
    }
`