const s="Shell Session",e=["sh-session"],t="shellsession",n=[{captures:{1:{name:"entity.other.prompt-prefix.shell-session"},2:{name:"punctuation.separator.prompt.shell-session"},3:{name:"source.shell",patterns:[{include:"source.shell"}]}},match:"^(?:((?:\\(\\S+\\)\\s*)?(?:sh\\S*?|\\w+\\S+[@:]\\S+(?:\\s+\\S+)?|\\[\\S+?[@:][^\\n]+?\\].*?))\\s*)?([>$#%❯➜]|\\p{Greek})\\s+(.*)$"},{match:"^.+$",name:"meta.output.shell-session"}],o="text.shell-session",a={displayName:s,fileTypes:e,name:t,patterns:n,scopeName:o};export{a as default,s as displayName,e as fileTypes,t as name,n as patterns,o as scopeName};