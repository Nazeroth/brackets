module.exports = function check(str, bracketsConfig) {
  let config = bracketsConfig.map(el => el.join(""));
  
  for (let i = 0; i < config.length; i++){
    if (str.includes(config[i])){
      str = str.replace(config[i], "")
      i = -1;
    }
  }
 
  return str === '' ? true : false;
}
