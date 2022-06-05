export type Opts = {
  base: boolean | undefined;
};

export type Lilgit = {
  init: (opts: Opts) => void;
  add: (opts: Opts) => void;
  rm: (opts: Opts) => void;
  commit: (opts: Opts) => void;
  branch: (opts: Opts) => void;
  checkout: (opts: Opts) => void;
  diff: (opts: Opts) => void;
  remote: (opts: Opts) => void;
  fetch: (opts: Opts) => void;
  merge: (opts: Opts) => void;
  pull: (opts: Opts) => void;
  push: (opts: Opts) => void;
  status: (opts: Opts) => void;
  clone: (opts: Opts) => void;
  update_ref: (opts: Opts) => void;
  update_index: (opts: Opts) => void;
  write_tree: (opts: Opts) => void;
};
