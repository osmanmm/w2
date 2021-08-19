const findWaldo = function(names, found) {
    for (let i = 0; i < names.length; i++) {
      let name = names[i];
      if (name === "Waldo") {
        found(i);  
      }
    }
  }
  
  const actionWhenFound = function(i) {
    console.log("Found Waldo at index " + i + "!");
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


  