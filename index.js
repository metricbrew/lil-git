const fs = require("node:fs");
const path = require("node:path");
console.log("lil git (version 0.0.1)");

const lilgit = (module.exports = {
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
});

const refs = {
  hash: function (ref) {},
  isRef: function (ref) {},
  terminalRef: function (ref) {},
  isHeadDetached: function () {},
  isCheckedOut: function () {},
  toLocalRef: function () {},
  toRemoteRef: function () {},
  write: function () {},
  rm: function () {},
  fetchHeadBranchToMerge: function () {},
  localHeads: function () {},
  exists: function () {},
  headBranchName: function () {},
  commitParentHashes: function () {},
};

const objects = {
  fileTree: function () {},
  writeTree: function () {},
  writeCommit: function () {},
  write: function () {},
  isUpToDate: function () {},
  exists: function () {},
  read: function () {},
  allObjects: function () {},
  type: function () {},
  isAncestor: function () {},
  ancestors: function () {},
  parentHashes: function () {},
  treeHash: function () {},
  commitToc: function () {},
};

const index = {
  hasFile: function () {},
  read: function () {},
  key: function () {},
  keyPieces: function () {},
  toc: function () {},
  isFileInConflict: function () {},
  conflictedPaths: function () {},
  _writeStageEntry: function () {},
  writeNonConflict: function () {},
  writeConflict: function () {},
  writeRm: function () {},
  write: function () {},
  workingCopyToc: function () {},
  tocToIndex: function () {},
  matchingFiles: function () {},
};

const diff = {
  FILE_STATUS: {
    ADD: "A",
    MODIFY: "M",
    DELETE: "D",
    SAME: "SAME",
    CONFLICT: "CONFLICT",
  },
  diff: function () {},
  nameStatus: function () {},
  tocDiff: function () {},
  changedFilesCommitWouldOverwrite: function () {},
  addedOrModifiedFiles: function () {},
};

const merge = {
  commonAncestor: function () {},
  isMergeInProgress: function () {},
  canFastForward: function () {},
  isAForceFetch: function () {},
  hasConflicts: function () {},
  mergeDiff: function () {},
  writeMergeMsg: function () {},
  writeIndex: function () {},
  writeFastForwardMerge: function () {},
  writeNonFastForwardMerge: function () {},
};

const workingCopy = {
  write: function () {},
};

const config = {
  isBare: function () {},
  assertNotBare: function () {},
  read: function () {},
  write: function () {},
  strToObj: function () {},
  objToStr: function () {},
};

const util = {
  isString: function () {},
  hash: function () {},
  setIn: function () {},
  lines: function () {},
  flatten: function () {},
  unique: function () {},
  intersection: function () {},
  onRemote: function () {},
};
