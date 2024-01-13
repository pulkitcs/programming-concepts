function singleTon (fname, surname) {
  if(!singleTon.fname) {
    Object.defineProperties(singleTon, {
      fname: {
        value: fname, 
        writable: false
      }
    })
  }
}