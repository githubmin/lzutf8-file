const fs = require('fs')
const LZUTF8 = require('lzutf8')

const compress = (src, dest) => {
  const contents = fs.readFileSync(src, 'utf-8')
  const output = LZUTF8.compress(contents)

  if (dest != null) {
    fs.writeFileSync(dest, output)
  } else {
    var outputStr = new TextDecoder().decode(output)
    console.log(outputStr)
  }
}

const decompress = (src, dest) => {
  const buffer = fs.readFileSync(src, null).buffer
  const output = LZUTF8.decompress(new Uint8Array(buffer))

  if (dest != null) {
    fs.writeFileSync(dest, output)
  } else {
    console.log(output)
  }
}

exports.compress = (src, dest) => {
  compress(src, dest);
}

exports.decompress = (src, dest) => {
  decompress(src, dest);
}
