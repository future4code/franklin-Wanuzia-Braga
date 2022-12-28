import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
// Box-sizing
html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

* {
  &,
  &:before,
  &:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
}

// Reset
a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
}

html {
  line-height: 1;
}

ol,ul {
  list-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

caption,td,th {
  text-align: left;
  font-weight: 400;
  vertical-align: middle;
}

blockquote,q {
  quotes: none;
}

blockquote:after,blockquote:before,q:after,q:before {
  content: "";
  content: none;
}

a img {
  border: none;
}

article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary {
  display: block;
}

button {
  background: none;
  border: none;
  padding: 0;
}

// Page
html {
  overflow-y: scroll;
  min-height: 100%;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 62.5%;
}

body {
  font-family: "Roboto", sans-serif;
  line-height: 1.2;
  background-color:  #fff;
}

.wrapper {
  min-height: 100vh;
  overflow: hidden;
  width: 100%;
}

a {
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

p {
  font-size: 1.4rem;
  line-height: 1.2;
}

img {
  max-width: 100%;
  vertical-align: middle;
  object-fit: cover;
  object-position: top;
}

::-webkit-scrollbar {
  border-radius: 8px;
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 8px;
  width: 8px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 8px;
  width: 8px;
  background: #999;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #666;
}

.desaturated {
  filter: grayscale(1);
}

.inverted {
  filter: invert(100%);
}

// Link
a {
  color: red;
}

`

export default GlobalStyle
