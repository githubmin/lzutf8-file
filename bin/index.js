#! /usr/bin/env node

const { program } = require('commander')

const lzutf8 = require('../lib/lzutf8')

program.version('0.0.1');
program
  .option('-c, --compress <args...>')
  .option('-d, --decompress <args...>')
program.parse()

const main = () => {
  const opts = program.opts()
  if (opts.length < 1) {
    program.help()
  }

  const compressArgs = opts['compress']
  if (compressArgs != null && compressArgs.length > 0) {
    lzutf8.compress(compressArgs[0], compressArgs[1])
    process.exit(0)
  }

  const decompressArgs = opts['decompress']
  if (decompressArgs != null && decompressArgs.length > 0) {
    lzutf8.decompress(decompressArgs[0], decompressArgs[1])
    process.exit(0)
  }

  program.help()
}
main()
