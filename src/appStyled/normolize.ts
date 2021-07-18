import {createGlobalStyle} from "styled-components"

export const Normolize = createGlobalStyle`

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, 
pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, 
samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, 
form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, 
details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, 
summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  outline: none;
}

html {
  position: absolute;
  height: 100%;
  width: 100%;
}

body { 
  box-sizing: border-box;
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: overlay;
  font-size: 62.5%; 
  line-height: 1; 
  font-family: Arial, Tahoma, Verdana, sans-serif;
  background-color: ${props => props.theme.background.main}; 
}

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section { display: block; }
ol, ul { list-style: none; }

i {
  color: $main-bg;
}

blockquote, q { quotes: none; }
blockquote:before, blockquote:after, q:before, q:after { content: ''; content: none; }
strong { font-weight: bold; } 

input { outline: none; }

table { border-collapse: collapse; border-spacing: 0; }
img { border: 0; max-width: 100%; }

a { text-decoration: none; }
a:hover { text-decoration: none; }

`