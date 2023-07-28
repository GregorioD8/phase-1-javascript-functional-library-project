
function makeArray(collection){
    let myArray
    if(collection instanceof Array){
        myArray = collection.slice()
    } else{ 
        myArray = Object.values(collection)
    }
return myArray
}


function myEach(collection, callback){
let newCollection = makeArray(collection)

for(let el of newCollection){
    callback(el)
}

return collection
}

function myMap(collection, callback){
    let newCollection = makeArray(collection)

    let newArr = []

    for(let el of newCollection){
    newArr.push(callback(el))
    }

    return newArr
}

function myReduce(collection, callback, accumulator){
    let newCollection = makeArray(collection)

    if(!accumulator){
        accumulator = newCollection[0]
        newCollection = newCollection.slice(1)
    }
   for(let el of newCollection){
    accumulator = callback(accumulator, el, newCollection)
   }
   return accumulator
}

function myFind(collection, predicate){
    let newCollection = makeArray(collection)
    let foundEl
    for(let el of newCollection){
        if(predicate(el)){
            foundEl = el
            //breaks out of loop if found early
            break
        }
    }
    return foundEl
}

function myFilter(collection, predicate){
    let newCollection = makeArray(collection)
    let newArr = []

    for(let el of newCollection){
        if(predicate(el)){
            newArr.push(el)
        }
    }
    return newArr
}

function mySize(collection){
    let newCollection = makeArray(collection)
    let size = newCollection.length

    return size
}

function myFirst(array, stopNumber){
    let first
    if(!stopNumber){
       first = array[0]
    } else {
        first = array.slice(0, stopNumber)
    }

    return first
}

function myLast(array, startNumber){

    let last 

    if(!startNumber){
        last = array[array.length -1]
    } else {
        last = array.slice(array.length - startNumber, array.length)
    }

    return last
}


//The for...in statement iterates over the enumerable string properties of an object, while 
//the for...of statement iterates over values that the iterable object defines to be iterated over
function myKeys(obj){

    let keys = []

    for(let el in obj){
        keys.push(el)
    }

    return keys
}

function myValues(obj){

    let values = []

    for(let el in obj){
        values.push(obj[el])
    }

    return values
}