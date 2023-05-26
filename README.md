<div align="center">

# MTKruto

Cross-runtime JavaScript library for building Telegram clients

###### [Discussion Chat](https://t.me/MTKrutoChat) &middot; [API Reference](https://deno.land/x/mtkruto/mod.ts)

</div>

### Key Features

- **Cross-runtime.** Runs inside browsers, Deno, and Node.js.
- **Type-safe.** DX is enhanced with TypeScript support.
- **Made for the Web.** Leverages Web APIs.
- **Unoptionated.** No hidden behaviors.
- **Extensible.**: Highly customizable.

> Note: MTKruto has not reached version 1.0.0 yet. We highly recommend not to use it in production.

## Get Started

### Browsers

```html
<script type="module">
    import { Client, functions, utils } from "https://esm.sh/@mtkruto/browser";

    const client = new Client();
    await client.connect();

    const request = new functions.Ping({ pingId: utils.getRandomId() });
    console.debug(await client.invoke(request));
</script>
```

> The [@mtkruto/browser](https://npm.im/@mtkruto/browser) package can also be used with front end frameworks.

### Deno

```ts
import { Client, functions, utils } from "https://deno.land/x/mtkruto/mod.ts";

const client = new Client();
await client.connect();

const request = new functions.Ping({ pingId: utils.getRandomId() });
console.debug(await client.invoke(request));
```

### Node.js

```ts
const { Client, functions, utils } = require("@mtkruto/node"); // npm install @mtkruto/node

const client = new Client();
await client.connect();

const request = new functions.Ping({ pingId: utils.getRandomId() });
console.debug(await client.invoke(request));
```

## License

MTKruto is made open-source under the GNU Lesser General Public License version 3, or at your option, any later version. You are bound by the terms and conditions of this license. Refer to the [LICENSE](./LICENSE) file for more.

###### MTKruto owes the authors and contributors of [Piltover](https://github.com/DavideGalilei/piltover), [GramJS](https://github.com/gram-js/gramjs), [Grm](https://github.com/grmjs/grm), [mtcute](https://github.com/mtcute/mtcute), and other MTProto libraries and projects.
