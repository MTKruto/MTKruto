import { Composer as Composer_ } from "./1_composer.ts";
import { Context } from "./4_client.ts";

export class Composer<C extends Context = Context> extends Composer_<C> {
}
