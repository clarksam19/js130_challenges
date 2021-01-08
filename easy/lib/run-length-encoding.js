const encode = (string) => {
  let counter = match => match.length + match[0];
  let duplicates = string.replace(/(.)\1+/g, counter);
  return duplicates;
}

const decode = (string) => {
  let counts = /([0-9])+[^0-9]/ig
  let extender = (match) => {
    return match[match.length - 1].repeat(Number(match.slice(0, match.length - 1)));
  }
  return string.replace(counts, extender);
}

module.exports = {encode, decode};