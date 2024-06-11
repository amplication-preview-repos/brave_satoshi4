import * as graphql from "@nestjs/graphql";
import { StoresResolverBase } from "./base/stores.resolver.base";
import { Stores } from "./base/Stores";
import { StoresService } from "./stores.service";

@graphql.Resolver(() => Stores)
export class StoresResolver extends StoresResolverBase {
  constructor(protected readonly service: StoresService) {
    super(service);
  }
}
