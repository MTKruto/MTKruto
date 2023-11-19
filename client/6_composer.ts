import { Composer as Composer_ } from "./4_composer.ts";
import { Context } from "./5_client.ts";

export class Composer<C extends Context = Context> extends Composer_<C> {
}
