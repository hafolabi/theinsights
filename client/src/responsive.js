import { css } from "styled-components"

export const mobile = (props) => {
    return css `
        @media only screen and (max-width:700px){
            ${props}
        }
    `

};

export const tablet = (props) => {
    return css `
        @media only screen and (min-width:701px) and (max-width:1024px){
            ${props}
        }
    `

}