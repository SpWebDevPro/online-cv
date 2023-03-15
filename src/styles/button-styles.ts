import { css } from 'lit';

export const buttonStyles = css`
    button {
        border-radius: 0.25rem;
        border: none;
        padding: 0.6rem 1.2rem;
        font-size: 1rem;
        font-weight: 500;
        font-family: inherit;
        background-color: var(--dark-color-soft);
        cursor: pointer;
        transition: border-color 0.25s;
        margin: 1rem 0;
    }
    button:hover {
        border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
        outline: 0.25rem auto -webkit-focus-ring-color;
    }
    .button {
        border-radius: 0.25rem;
        border: none;
        padding: 0.6rem 1.2rem;
        font-size: 1rem;
        font-weight: 500;
        font-family: inherit;
        background-color: var(--dark-color-soft);
        cursor: pointer;
        transition: border-color 0.25s;
        margin: 1rem 0;
    }
    .button:hover {
        border-color: #646cff;
    }
    .button:focus,
    .button:focus-visible {
        outline: 0.25rem auto -webkit-focus-ring-color;
    }
`