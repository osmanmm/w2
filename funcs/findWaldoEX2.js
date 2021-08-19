// Refactor the function findWaldo to use the forEach() method instead of a for loop.
const findWaldo = (names, found) => {
    names.forEach(function(item, index) {
      if (item === "Waldo") {
        found(index); 
      }
    });
  };
  
  const actionWhenFound = i => {
    console.log("Found Waldo at index " + i + "!");
  };
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);