const cl = console.log //using a const keyword

let $name = "apple"
cl($name)

let a //declaration
cl(a) //undefined

a = "aaaaa" //aaaaa //assignment
cl(a) //aaaaa

a = 111 //reassignment
cl(a) //1111

cl(a + 111) //222

let c = a + 222 //333 //assigning a new variable
cl(c)

let d = c
cl(d) //333 //assigning a new variable to a previous variable

c += 100
cl(c)

c++ //increment
c++ //increment
c++ //increment

cl(c) //436