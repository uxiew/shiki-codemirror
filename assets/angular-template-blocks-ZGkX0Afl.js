const e=["text.html.derivative","text.html.derivative.ng","source.ts.ng"],n="L:text.html -comment -expression.ng -meta.tag -source.css -source.js",t="angular-template-blocks",o=[{include:"#block"}],c={block:{begin:"(@)(if|else if|else|defer|placeholder|loading|error|switch|case|default|for|empty)(?:\\s*)",beginCaptures:{1:{patterns:[{include:"#transition"}]},2:{name:"keyword.control.block.kind.ng"}},end:"(?<=\\})",name:"control.block.ng",patterns:[{include:"#blockExpression"},{include:"#blockBody"}]},blockBody:{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.block.ts"}},contentName:"control.block.body.ng",end:"\\}",endCaptures:{0:{name:"punctuation.definition.block.ts"}},patterns:[{include:"text.html.derivative.ng"},{include:"template.ng"}]},blockExpression:{begin:"\\(",beginCaptures:{0:{name:"meta.brace.round.ts"}},contentName:"control.block.expression.ng",end:"\\)",endCaptures:{0:{name:"meta.brace.round.ts"}},patterns:[{include:"expression.ng"}]},transition:{match:"@",name:"keyword.control.block.transition.ng"}},s="template.blocks.ng",a={injectTo:e,injectionSelector:n,name:t,patterns:o,repository:c,scopeName:s};export{a as default,e as injectTo,n as injectionSelector,t as name,o as patterns,c as repository,s as scopeName};