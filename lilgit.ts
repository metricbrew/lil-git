import fs from "node:fs";
import path from "node:path";
import type { Lilgit } from "./modules/t";

console.log("lil' git (version 0.0.1)");

const lilgit: Lilgit = {
  init: function (opts) {},
  add: function (opts) {},
  rm: function (opts) {},
  commit: function (opts) {},
  branch: function (opts) {},
  checkout: function (opts) {},
  diff: function (opts) {},
  remote: function (opts) {},
  fetch: function (opts) {},
  merge: function (opts) {},
  pull: function (opts) {},
  push: function (opts) {},
  status: function (opts) {},
  clone: function (opts) {},
  update_ref: function (opts) {},
  update_index: function (opts) {},
  write_tree: function (opts) {},
  // Not implemented in tutorial but which I want to implement:
  // squash
  // ...
};

module.exports = lilgit;
