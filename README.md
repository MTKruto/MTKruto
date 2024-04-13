<div align="center">

# MTKruto

Cross-runtime JavaScript library for building Telegram clients

###### [Documentation](https://mtkruto.deno.dev) / [API Reference](https://deno.land/x/mtkruto/mod.ts) / [Discussion Chat](https://t.me/MTKrutoChat) / [License](#license)

</div>

### Key Features

- **Easy-to-use.** Provides high-level [methods](https://mtkruto.deno.dev/methods) and [types](https://mtkruto.deno.dev/types) for convenience.
- **Cross-runtime.** Supports Node.js, Deno, browsers, and Bun.
- **Type-safe.** Written in TypeScript with accurate typings.
- **Made for the Web.** Leverages Web APIs.
- **Unopinionated.** No hidden behaviors.
- **Extensible.** Highly customizable.

> Note: MTKruto has not reached version 1.0.0 yet. While it can run in production, we currently do not recommend depending on it for critical projects.

## Get Started

### Node.js

```ts
const { Client, getRandomId } = require("@mtkruto/node"); // npm install @mtkruto/node

const client = new Client();
await client.connect();

const pong = await client.api.ping({ ping_id: getRandomId() });
console.debug(pong);
```

### Deno

```ts
import { Client, getRandomId } from "https://deno.land/x/mtkruto/mod.ts";

const client = new Client();
await client.connect();

const pong = await client.api.ping({ ping_id: getRandomId() });
console.debug(pong);
```

### Browsers

```html
<script type="module">
    import { Client, getRandomId } from "https://esm.sh/@mtkruto/browser";

    const client = new Client();
    await client.connect();

    const pong = await client.api.ping({ ping_id: getRandomId() });
    console.debug(pong);
</script>
```

> The [@mtkruto/browser](https://npm.im/@mtkruto/browser) package can also be used with front end frameworks and bundlers.

### Bun

```ts
import { Client, getRandomId } from "@mtkruto/mtkruto"; // bunx jsr i @mtkruto/mtkruto

const client = new Client();
await client.connect();

const pong = await client.api.ping({ ping_id: getRandomId() });
console.debug(pong);
```

## License

MTKruto is made open-source under the GNU Lesser General Public License version 3, or at your option, any later version. Refer to [COPYING](./COPYING) and [COPYING.LESSER](./COPYING.LESSER) for more.
