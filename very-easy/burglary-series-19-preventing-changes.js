const preventChanges = (obj) => {
  // write your code here
  // don't use a return statement
  Object.freeze(obj);

  // DON'T CHANGE OR REMOVE THE LINES BELOW
  obj.noChanges = false;
  obj.signature = "whatever";
  return obj;
};

console.log(preventChanges({ noChanges: true }));
