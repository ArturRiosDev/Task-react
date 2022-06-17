const nextPage = (val) => {
    if(validatePagination(val)){
      return true
    }
    return false
    
};

const validatePagination = (val) => {
  if (val.length > 25) {
    alert("challenge #1 completed");
    return true
  }
  return false
};



export { validatePagination, nextPage };
