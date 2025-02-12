/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/calc-dep-flags.js TAP flag stuff > after 1`] = `
ArboristNode {
  "children": Map {
    "dev" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "dev",
          "spec": "*",
          "type": "dev",
        },
      },
      "edgesOut": Map {
        "devdep" => EdgeOut {
          "name": "devdep",
          "spec": "*",
          "to": "node_modules/devdep",
          "type": "prod",
        },
      },
      "location": "node_modules/dev",
      "name": "dev",
      "path": "/x/node_modules/dev",
      "version": "1.2.3",
    },
    "devandoptional" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/devdep",
          "name": "devandoptional",
          "spec": "*",
          "type": "optional",
        },
      },
      "location": "node_modules/devandoptional",
      "name": "devandoptional",
      "optional": true,
      "path": "/x/node_modules/devandoptional",
      "version": "1.2.3",
    },
    "devdep" => ArboristNode {
      "children": Map {
        "linky" => ArboristLink {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "node_modules/devdep",
              "name": "linky",
              "spec": "*",
              "type": "prod",
            },
          },
          "location": "node_modules/devdep/node_modules/linky",
          "name": "linky",
          "path": "/x/node_modules/devdep/node_modules/linky",
          "realpath": "/x/y/z",
          "resolved": "file:../../../y/z",
          "target": ArboristNode {
            "location": "y/z",
          },
          "version": "1.2.3",
        },
      },
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/dev",
          "name": "devdep",
          "spec": "*",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "devandoptional" => EdgeOut {
          "name": "devandoptional",
          "spec": "*",
          "to": "node_modules/devandoptional",
          "type": "optional",
        },
        "devoptional" => EdgeOut {
          "name": "devoptional",
          "spec": "*",
          "to": "node_modules/devoptional",
          "type": "prod",
        },
        "linky" => EdgeOut {
          "name": "linky",
          "spec": "*",
          "to": "node_modules/devdep/node_modules/linky",
          "type": "prod",
        },
        "proddep" => EdgeOut {
          "name": "proddep",
          "spec": "*",
          "to": "node_modules/proddep",
          "type": "prod",
        },
      },
      "location": "node_modules/devdep",
      "name": "devdep",
      "path": "/x/node_modules/devdep",
      "version": "1.2.3",
    },
    "devoptional" => ArboristNode {
      "devOptional": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/devdep",
          "name": "devoptional",
          "spec": "*",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/optional",
          "name": "devoptional",
          "spec": "*",
          "type": "prod",
        },
      },
      "location": "node_modules/devoptional",
      "name": "devoptional",
      "path": "/x/node_modules/devoptional",
      "version": "1.2.3",
    },
    "extraneous" => ArboristNode {
      "dev": true,
      "extraneous": true,
      "location": "node_modules/extraneous",
      "name": "extraneous",
      "optional": true,
      "path": "/x/node_modules/extraneous",
      "peer": true,
    },
    "metapeer" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/prod",
          "name": "metapeer",
          "spec": "*",
          "type": "peer",
        },
      },
      "edgesOut": Map {
        "metapeerdep" => EdgeOut {
          "name": "metapeerdep",
          "spec": "*",
          "to": "node_modules/metapeerdep",
          "type": "prod",
        },
      },
      "location": "node_modules/metapeer",
      "name": "metapeer",
      "path": "/x/node_modules/metapeer",
      "peer": true,
      "version": "1.2.3",
    },
    "metapeerdep" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/metapeer",
          "name": "metapeerdep",
          "spec": "*",
          "type": "prod",
        },
      },
      "location": "node_modules/metapeerdep",
      "name": "metapeerdep",
      "path": "/x/node_modules/metapeerdep",
      "peer": true,
      "version": "1.2.3",
    },
    "optional" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "optional",
          "spec": "*",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "devoptional" => EdgeOut {
          "name": "devoptional",
          "spec": "*",
          "to": "node_modules/devoptional",
          "type": "prod",
        },
        "missing" => EdgeOut {
          "error": "MISSING",
          "name": "missing",
          "spec": "*",
          "to": null,
          "type": "prod",
        },
      },
      "location": "node_modules/optional",
      "name": "optional",
      "optional": true,
      "path": "/x/node_modules/optional",
      "version": "1.2.3",
    },
    "peer" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "peer",
          "spec": "*",
          "type": "peer",
        },
      },
      "edgesOut": Map {
        "peerdep" => EdgeOut {
          "name": "peerdep",
          "spec": "*",
          "to": "node_modules/peerdep",
          "type": "prod",
        },
      },
      "location": "node_modules/peer",
      "name": "peer",
      "path": "/x/node_modules/peer",
      "peer": true,
      "version": "1.2.3",
    },
    "peerdep" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/peer",
          "name": "peerdep",
          "spec": "*",
          "type": "prod",
        },
      },
      "location": "node_modules/peerdep",
      "name": "peerdep",
      "path": "/x/node_modules/peerdep",
      "peer": true,
      "version": "1.2.3",
    },
    "prod" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "prod",
          "spec": "*",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "metapeer" => EdgeOut {
          "name": "metapeer",
          "spec": "*",
          "to": "node_modules/metapeer",
          "type": "peer",
        },
        "proddep" => EdgeOut {
          "name": "proddep",
          "spec": "*",
          "to": "node_modules/proddep",
          "type": "prod",
        },
      },
      "location": "node_modules/prod",
      "name": "prod",
      "path": "/x/node_modules/prod",
      "version": "1.2.3",
    },
    "proddep" => ArboristNode {
      "edgesIn": Set {
        EdgeIn {
          "from": "node_modules/devdep",
          "name": "proddep",
          "spec": "*",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/prod",
          "name": "proddep",
          "spec": "*",
          "type": "prod",
        },
        EdgeIn {
          "from": "node_modules/proddep",
          "name": "proddep",
          "spec": "*",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "proddep" => EdgeOut {
          "name": "proddep",
          "spec": "*",
          "to": "node_modules/proddep",
          "type": "prod",
        },
      },
      "location": "node_modules/proddep",
      "name": "proddep",
      "path": "/x/node_modules/proddep",
      "version": "1.2.3",
    },
  },
  "edgesOut": Map {
    "dev" => EdgeOut {
      "name": "dev",
      "spec": "*",
      "to": "node_modules/dev",
      "type": "dev",
    },
    "optional" => EdgeOut {
      "name": "optional",
      "spec": "*",
      "to": "node_modules/optional",
      "type": "optional",
    },
    "peer" => EdgeOut {
      "name": "peer",
      "spec": "*",
      "to": "node_modules/peer",
      "type": "peer",
    },
    "prod" => EdgeOut {
      "name": "prod",
      "spec": "*",
      "to": "node_modules/prod",
      "type": "prod",
    },
  },
  "fsChildren": Set {
    ArboristNode {
      "children": Map {
        "linklink" => ArboristLink {
          "dev": true,
          "edgesIn": Set {
            EdgeIn {
              "from": "y/z",
              "name": "linklink",
              "spec": "*",
              "type": "prod",
            },
          },
          "location": "y/z/node_modules/linklink",
          "name": "linklink",
          "path": "/x/y/z/node_modules/linklink",
          "realpath": "/l/i/n/k/link",
          "resolved": "file:../../../../l/i/n/k/link",
          "target": ArboristNode {
            "dev": true,
            "location": "../l/i/n/k/link",
            "name": "link",
            "packageName": "linklink",
            "path": "/l/i/n/k/link",
            "version": "1.2.3",
          },
          "version": "1.2.3",
        },
      },
      "dev": true,
      "edgesOut": Map {
        "linklink" => EdgeOut {
          "name": "linklink",
          "spec": "*",
          "to": "y/z/node_modules/linklink",
          "type": "prod",
        },
      },
      "location": "y/z",
      "name": "z",
      "packageName": "linky",
      "path": "/x/y/z",
      "version": "1.2.3",
    },
  },
  "location": "",
  "name": "x",
  "path": "/x",
}
`

exports[`test/calc-dep-flags.js TAP no reset > after 1`] = `
ArboristNode {
  "children": Map {
    "foo" => ArboristNode {
      "dev": true,
      "edgesIn": Set {
        EdgeIn {
          "from": "",
          "name": "foo",
          "spec": "*",
          "type": "prod",
        },
      },
      "location": "node_modules/foo",
      "name": "foo",
      "path": "/some/path/node_modules/foo",
      "peer": true,
      "version": "1.2.3",
    },
  },
  "dev": true,
  "edgesOut": Map {
    "foo" => EdgeOut {
      "name": "foo",
      "spec": "*",
      "to": "node_modules/foo",
      "type": "prod",
    },
  },
  "location": "",
  "name": "path",
  "path": "/some/path",
  "peer": true,
}
`
