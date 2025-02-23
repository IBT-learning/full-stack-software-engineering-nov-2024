# YORDANOS Main Branch
>> 
|Array method| what it does| modify original array| returnes | works on strings|
|----------|---------|-------------------|------| ---|
. push(x)  |inserts x to latest index |  yes            |  index of new array member| no
. unshift(x)|inserts x to index 0  |     | yes      | index of new array member| no
. pop() | removes value at array[latest] | yes               | the poped/last value | no
. shift()| removes value at array[0] index | yes                | the shifted/first [0]value | no
. slice |copies all members       | no                 | copy of original | yes
.slice(i,j)|copies from index 1 to index (j-i+1) do  | no                 |if slice(1,3)returns a[1],a[2] NOT a[3]| yes
.splice(i,n,anything[numberOR"str"OR[array]OR{obj}]) | removes n amount satrting from a[i], insert third parameter at a[i] | Yes | removed valuesfrom a[i] to (including) a[i+n-1]| no
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
