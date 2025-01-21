## JS Array VS Objet loops

### common loops, recommendations, and scope

| Array/Object                 | Loop Type                 | variable value(key)          | to access value(data) | recomended                                                    |
| ---------------------------- | ------------------------- | ---------------------------- | --------------------- | ------------------------------------------------------------- |
| list=["sun","mon","tue"]     | for(let word in wordList) | number/index of current loop | list[word]            | for..in recomended for objects                                |
| list=["sun","mon","tue"]     | for(let word of wordList) | current value of key         | word                  | for..of recomended for arrays                                 |
| list={day1:"sun",day2:"mon"} | for(let word in wordList) | number/index of current loop | list[word]            | Object.hasOwn(list,word)is true                               |
| list={day1:"sun",day2:"mon"} | for(let word of wordList) | not iterable                 | -                     | for(let [key,word] of Object.enteries(list)) to get key&value |

## --

| variable inside the loop                              | scope                    | in each iteration                                                              |
| ----------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------ |
| let                                                   | block scoped             | new variables are initialized everytime                                        |
| const                                                 | block                    | loop automatically updates the const value via binding                         |
| without type declarations (eg. for(word in wordList)) | global scoped            | can be accecced after loop ended with last iteration value                     |
| var                                                   | global / function scoped | variable declared globbaly too (recommended to use let/consst or 'use strict') |
