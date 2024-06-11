/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Services } from "./Services";
import { ServicesCountArgs } from "./ServicesCountArgs";
import { ServicesFindManyArgs } from "./ServicesFindManyArgs";
import { ServicesFindUniqueArgs } from "./ServicesFindUniqueArgs";
import { CreateServicesArgs } from "./CreateServicesArgs";
import { UpdateServicesArgs } from "./UpdateServicesArgs";
import { DeleteServicesArgs } from "./DeleteServicesArgs";
import { AppointmentsFindManyArgs } from "../../appointments/base/AppointmentsFindManyArgs";
import { Appointments } from "../../appointments/base/Appointments";
import { ReviewsFindManyArgs } from "../../reviews/base/ReviewsFindManyArgs";
import { Reviews } from "../../reviews/base/Reviews";
import { StoresFindManyArgs } from "../../stores/base/StoresFindManyArgs";
import { Stores } from "../../stores/base/Stores";
import { ServicesService } from "../services.service";
@graphql.Resolver(() => Services)
export class ServicesResolverBase {
  constructor(protected readonly service: ServicesService) {}

  async _servicesItemsMeta(
    @graphql.Args() args: ServicesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Services])
  async servicesItems(
    @graphql.Args() args: ServicesFindManyArgs
  ): Promise<Services[]> {
    return this.service.servicesItems(args);
  }

  @graphql.Query(() => Services, { nullable: true })
  async services(
    @graphql.Args() args: ServicesFindUniqueArgs
  ): Promise<Services | null> {
    const result = await this.service.services(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Services)
  async createServices(
    @graphql.Args() args: CreateServicesArgs
  ): Promise<Services> {
    return await this.service.createServices({
      ...args,
      data: {
        ...args.data,

        store: args.data.store
          ? {
              connect: args.data.store,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Services)
  async updateServices(
    @graphql.Args() args: UpdateServicesArgs
  ): Promise<Services | null> {
    try {
      return await this.service.updateServices({
        ...args,
        data: {
          ...args.data,

          store: args.data.store
            ? {
                connect: args.data.store,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Services)
  async deleteServices(
    @graphql.Args() args: DeleteServicesArgs
  ): Promise<Services | null> {
    try {
      return await this.service.deleteServices(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Appointments], { name: "appointmentsItems" })
  async findAppointmentsItems(
    @graphql.Parent() parent: Services,
    @graphql.Args() args: AppointmentsFindManyArgs
  ): Promise<Appointments[]> {
    const results = await this.service.findAppointmentsItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Reviews], { name: "reviewsItems" })
  async findReviewsItems(
    @graphql.Parent() parent: Services,
    @graphql.Args() args: ReviewsFindManyArgs
  ): Promise<Reviews[]> {
    const results = await this.service.findReviewsItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Stores], { name: "storesItems" })
  async findStoresItems(
    @graphql.Parent() parent: Services,
    @graphql.Args() args: StoresFindManyArgs
  ): Promise<Stores[]> {
    const results = await this.service.findStoresItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Stores, {
    nullable: true,
    name: "store",
  })
  async getStore(@graphql.Parent() parent: Services): Promise<Stores | null> {
    const result = await this.service.getStore(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
