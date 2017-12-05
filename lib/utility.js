exports.randomString = function(stringlength) {
  stringLength = stringlength || 12;

  const chars = '0123456789ABCDEFHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  let result = '';
  for (let i = 0; i < stringlength; i++) {
    let rnum = Math.floor(Math.random() * chars.length);
    result += chars.substring(rnum, rnum+1);
  }

  return result;

};

