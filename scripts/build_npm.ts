import { build, emptyDir } from "https://deno.land/x/dnt@0.23.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    deno: "dev",
  },
  package: {
    name: "snowball-stem",
    version: Deno.args[0],
    description: "⛄ Snowball stemmers for NPM.",
    keywords: [
      "nlp",
      "snowball",
      "languages",
      "stemmers",
    ],
    author: "Nathan Brooks <natebrooks004@gmail.com>",
    license: "BSD 3-Clause",
    repository: {
      type: "git",
      url: "git+https://github.com/N8Brooks/snowball.git",
    },
    bugs: {
      url: "https://github.com/N8Brooks/snowball/issues",
    },
    homepage: "https://github.com/N8Brooks/snowball",
  },
  test: false, // TODO: fix
});

Deno.copyFileSync("./LICENSE", "./npm/LICENSE");

Deno.copyFileSync("./README.md", "./npm/README.md");
