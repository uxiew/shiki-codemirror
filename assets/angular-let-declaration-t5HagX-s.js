const e=["text.html.derivative","text.html.derivative.ng","source.ts.ng"],t="L:text.html -comment -expression.ng -meta.tag -source.css -source.js",n="angular-let-declaration",a=[{include:"#letDeclaration"}],i={letDeclaration:{begin:"(@let)\\s+([_$A-Za-z][_$0-9A-Za-z]*)\\s*(=)?",beginCaptures:{1:{name:"storage.type.ng"},2:{name:"meta.definition.variable.ng"},3:{name:"keyword.operator.assignment.ng"}},contentName:"meta.definition.variable.ng",end:"(?<=;)",patterns:[{include:"#letInitializer"}]},letInitializer:{begin:"\\s*",beginCaptures:{0:{name:"keyword.operator.assignment.ng"}},contentName:"meta.definition.variable.initializer.ng",end:";",endCaptures:{0:{name:"punctuation.terminator.statement.ng"}},patterns:[{include:"expression.ng"}]}},o="template.let.ng",r={injectTo:e,injectionSelector:t,name:n,patterns:a,repository:i,scopeName:o};export{r as default,e as injectTo,t as injectionSelector,n as name,a as patterns,i as repository,o as scopeName};