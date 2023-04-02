// Code your solution here

function findMatching(arrs, query) {
    return arrs.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  }

function fuzzyMatch(arrs, query) {
    return arrs.filter(item => item.toLowerCase().startsWith(query.toLowerCase()));
  }

function matchName(arrs, query) {
    return arrs.filter(driver => driver.name === query);
  }