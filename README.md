<div align="center">

# MTKruto

Cross-runtime JavaScript library for building Telegram clients

[![@MTKrutoChat](https://img.shields.io/badge/@MTKrutoChat-black?logo=telegram&style=flat&labelColor=000&color=3b82f6)](https://core.telegram.org/bots/api) [![deno.land/x](https://shield.deno.dev/x/mtkruto)](https://deno.land/x/mtkruto) [![@mtkruto/node on npm](https://img.shields.io/npm/v/mtkruto?logo=npm&style=flat&labelColor=000&color=3b82f6&label=@mtkruto/node)](https://npm.im/@mtkruto/node)
[![@mtkruto/browser on npm](https://img.shields.io/npm/v/mtkruto?logo=npm&style=flat&labelColor=000&color=3b82f6&label=@mtkruto/browser)](https://npm.im/@mtkruto/browser)

</div>

### Key Features

- **Cross-runtime.** With MTKruto, you can write Telegram clients that run on Deno, browsers, or Node.js.
- **Uses Web APIs.** MTKruto takes advantages of modern [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) wherever possible instead of third-party or runtime-specific solutions.
- **Uncomplicatedly extensible.** Get started with a couple lines of code. Extend everything from the session store to the MTProto transport.
- **Type-safe.** All parts of MTKruto and the generated functions and types are fully type-safe and play well with TypeScript.

> Note: MTKruto has not reached version 1.0.0 yet. We highly recommend not to use it in production.

## Get Started in a Step

### Browsers

```html
<script>
    import { functions, utils } from "https://esm.sh/@mtkruto/browser";

    const client = new Client();
    await client.connect();

    const request = new functions.Ping({ pingId: utils.randomId() });
    console.debug(await client.invoke(request));
</script>
```

> The [@mtkruto/browser](https://npm.im/@mtkruto/browser) package can also be used with front end frameworks.

### Deno

```ts
import { functions, utils } from "https://deno.land/x/mtkruto/mod.ts";

const client = new Client();
await client.connect();

const request = new functions.Ping({ pingId: utils.randomId() });
console.debug(await client.invoke(request));
```

### Node.js

```ts
import { functions, utils } from "@mtkruto/node";

const client = new Client();
await client.connect();

const request = new functions.Ping({ pingId: utils.randomId() });
console.debug(await client.invoke(request));

// It's actually two steps for Node.js
// since you also have to run `npm install @mtkrutonode`.
```

## License

MTKruto is open-source under LGPL 3.0 or at your option any later version. You are bound by the terms and conditions of this license. Refer to the [LICENSE](./LICENSE) file for more.

###### MTKruto owes the authors and contributors of [Piltover](https://github.com/DavideGalilei/piltover), [GramJS](https://github.com/gram-js/gramjs), [Grm](https://github.com/grmjs/grm), [mtcute](https://github.com/mtcute/mtcute), and other MTProto libraries and projects.
