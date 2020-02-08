/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    let copiedArr = arr.slice()
    let orderedArr = copiedArr.sort((a, b) => {
        if ( a.year === b.year ) {
            if (a.title > b.title) {
                return 1 
            } else {
                return -1
            }
        }
         else if (a.year > b.year ) {
            return 1 
        } else {
            return -1
        }
    })
    return orderedArr
}


console.log(orderedArr)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies (arr){
    let dramaSpielberg = arr.filter(arg => arg.genre.includes("Drama") && arg.director === "Steven Spielberg"
    );
    return dramaSpielberg.length
}
howManyMovies(movies)

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    let alphArray = arr.sort((a, b) => {
        if (a.title > b.title) {
            return 1
        } else {
            return -1
        }
    })  
   return alphArray.map(myArr => myArr.title).slice(0,20);
}
orderAlphabetically(movies)
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    let avgArr = arr.reduce((sum, rate) => {
        return sum + rate.rate
    }, 0)
       return Number((avgArr / arr.length).toFixed(2));
}

ratesAverage(movies)



// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {

    let dramaOnly = arr.filter(arg => arg.genre.includes("Drama"))

    let dramaRate = dramaOnly.reduce((sum, rate) => { 
        
        return sum + rate.rate}, 0)

    return Number((dramaRate / dramaOnly.length).toFixed(2));
}

dramaMoviesRate(movies)

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(){}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
