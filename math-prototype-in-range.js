//-----------------------------------------
// Math.protoytype.range()
//   Write a method called `range` to the Math prototype that accepts 2 arguments and
//   returns a random integer number inside of that range
//
//   The order of the arguments passed shouldn't matter.
//
//   Hint: You will need to use the existing Math.prorotMath.prototype.floor()
//------------------------------------------










// TEST 1 -- runs the Math.range function above over many iteration cycles
//           to make sure it returns a random number on each iteration
//..............................
var testForRandomRange = function(lowerNum, upperNum, iterationCount){
  var numIsInRange = false;
  var inRangeCounter = 0;

  for (var i = 0 ; i < iterationCount ; i += 1){
    var somRandomNum = Math.range(lowerNum, upperNum) // AWESOME
    if( somRandomNum >= upperNum || somRandomNum <= upperNum) { inRangeCounter += 1 }
  }

  if (inRangeCounter === iterationCount) {
    numIsInRange = true
   }

  return numIsInRange
}


console.assert( typeof Math.prototype.range === 'function' )
console.assert( testForRandomRange( 10 , 2000  )  === true )
console.assert( testForRandomRange( -300, 10000 ) === true )


//...............................
