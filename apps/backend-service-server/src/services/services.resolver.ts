import * as graphql from "@nestjs/graphql";
import { ServicesResolverBase } from "./base/services.resolver.base";
import { Services } from "./base/Services";
import { ServicesService } from "./services.service";

@graphql.Resolver(() => Services)
export class ServicesResolver extends ServicesResolverBase {
  constructor(protected readonly service: ServicesService) {
    super(service);
  }
}
