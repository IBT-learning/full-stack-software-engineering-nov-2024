const cl = console.log

const nums = [1, 2, 3, 4, 5]
const num1 = [10, 20]
let alpa = "abcde"


//ASSIGN BY FIXED INDEX
nums[5] = 20
nums[7] = 40

cl(nums, nums[1], alpa, alpa[2], num1 + "" + nums, nums.length, nums[6])

//ASSIGN BY DYNAMIIC INDEX
nums[nums.length] = "This is added at the end"
nums.push("This is also added")
cl(nums)

let midPoint = nums[nums.length/2]
cl(midPoint)

// Just checking if i remembered this typemof if statement
let d = false
d? cl("ok") : cl ("not ok") 

nums[8] = [40, 41, 42]
cl(nums[8][0])

// ARRAY METHODS

// Array Push()

const bestFoods  = ["Jollof Rice" , "Texas BBQ", "Sushi"]

bestFoods.push("Kuku")

bestFoods.push("Pasta", "Burgers")

bestFoods.push("Kulikuli", ["Akara", "Pap"], 1, 2, 3)

cl(bestFoods)

// Array Pop()

let removed  = bestFoods.pop()
cl(bestFoods,"What was removed is:", removed)

// Shift() and Unshift()
let removeFirstElem = bestFoods.shift()
cl(bestFoods,"The first item that was removed is:", removeFirstElem)

let addFirstElem = bestFoods.unshift("Salad")
cl(bestFoods,"The new length is:", addFirstElem)


// Array.at()
const arr = [1, 2, 3, 4, 5]
cl(arr.at(-1))


// Array.slice() // Copies a portion of the Array
const arr1 =[20, 40, 60, 80, 100, 120, 140, 160]

let slicedArr = arr1.slice(0, 3)

cl(slicedArr)

const arr2 = ["a", "b", "c", "d", "e"]
 cl(arr2.slice(2))

 //Array.sort()
 const test = ["a", "d", 20, 40, 80]
 cl(test.sort())

 //Array.toSorted() // Makes a sorted copy
 const test1 = ["a", "d", 20, 40, 80]

 const angst = test1.toSorted()
 cl(angst, test1)

 //Array.reverse()
 const test2 = ["hey", "june", 20, 30]
 cl(test2.reverse())
 test2[4] = "june"
 test2[7] = "june"

 //Array.indexOf()
 cl(test2.indexOf("june"))
 cl(test2)
 cl(test2.indexOf("june", 5))




