const e=["js","jsx","ts","tsx","html","vue","svelte","php","res"],t=["source.ts","source.js"],n="L:source.js -comment -string, L:source.js -comment -string, L:source.jsx -comment -string,  L:source.js.jsx -comment -string, L:source.ts -comment -string, L:source.tsx -comment -string, L:source.rescript -comment -string",s={"L:source":{patterns:[{match:"<",name:"invalid.illegal.bad-angle-bracket.html"}]}},i="es-tag-html",m=[{begin:"(?i)(\\s?\\/\\*\\s?(html|template|inline-html|inline-template)\\s?\\*\\/\\s?)(`)",beginCaptures:{1:{name:"comment.block"}},end:"(`)",patterns:[{include:"source.ts#template-substitution-element"},{include:"text.html.basic"},{include:"inline.es6-htmlx#template"}]},{begin:"(?i)(\\s*(html|template|inline-html|inline-template))(`)",beginCaptures:{1:{name:"comment.block"}},end:"(`)",patterns:[{include:"source.ts#template-substitution-element"},{include:"text.html.basic"},{include:"inline.es6-htmlx#template"},{include:"string.quoted.other.template.js"}]},{begin:"(?i)(?<=\\s|\\,|=|:|\\(|\\$\\()\\s{0,}(((\\/\\*)|(\\/\\/))\\s?(html|template|inline-html|inline-template)[ ]{0,1000}\\*?\\/?)[ ]{0,1000}$",beginCaptures:{1:{name:"comment.line"}},end:"(`).*",patterns:[{begin:"(\\G)",end:"(`)"},{include:"source.ts#template-substitution-element"},{include:"text.html.basic"}]},{begin:"(\\${)",beginCaptures:{1:{name:"entity.name.tag"}},end:"(})",endCaptures:{1:{name:"entity.name.tag"}},patterns:[{include:"source.ts#template-substitution-element"},{include:"source.js"}]},{begin:"(\\$\\(`)",beginCaptures:{1:{name:"entity.name.tag"}},end:"(`\\))",endCaptures:{1:{name:"entity.name.tag"}},patterns:[{include:"source.ts#template-substitution-element"},{include:"source.js"}]}],l="inline.es6-html",c={fileTypes:e,injectTo:t,injectionSelector:n,injections:s,name:i,patterns:m,scopeName:l};export{c as default,e as fileTypes,t as injectTo,n as injectionSelector,s as injections,i as name,m as patterns,l as scopeName};