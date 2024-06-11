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
import { Payments } from "./Payments";
import { PaymentsCountArgs } from "./PaymentsCountArgs";
import { PaymentsFindManyArgs } from "./PaymentsFindManyArgs";
import { PaymentsFindUniqueArgs } from "./PaymentsFindUniqueArgs";
import { CreatePaymentsArgs } from "./CreatePaymentsArgs";
import { UpdatePaymentsArgs } from "./UpdatePaymentsArgs";
import { DeletePaymentsArgs } from "./DeletePaymentsArgs";
import { Appointments } from "../../appointments/base/Appointments";
import { PaymentsService } from "../payments.service";
@graphql.Resolver(() => Payments)
export class PaymentsResolverBase {
  constructor(protected readonly service: PaymentsService) {}

  async _paymentsItemsMeta(
    @graphql.Args() args: PaymentsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Payments])
  async paymentsItems(
    @graphql.Args() args: PaymentsFindManyArgs
  ): Promise<Payments[]> {
    return this.service.paymentsItems(args);
  }

  @graphql.Query(() => Payments, { nullable: true })
  async payments(
    @graphql.Args() args: PaymentsFindUniqueArgs
  ): Promise<Payments | null> {
    const result = await this.service.payments(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Payments)
  async createPayments(
    @graphql.Args() args: CreatePaymentsArgs
  ): Promise<Payments> {
    return await this.service.createPayments({
      ...args,
      data: {
        ...args.data,

        appointment: args.data.appointment
          ? {
              connect: args.data.appointment,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Payments)
  async updatePayments(
    @graphql.Args() args: UpdatePaymentsArgs
  ): Promise<Payments | null> {
    try {
      return await this.service.updatePayments({
        ...args,
        data: {
          ...args.data,

          appointment: args.data.appointment
            ? {
                connect: args.data.appointment,
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

  @graphql.Mutation(() => Payments)
  async deletePayments(
    @graphql.Args() args: DeletePaymentsArgs
  ): Promise<Payments | null> {
    try {
      return await this.service.deletePayments(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Appointments, {
    nullable: true,
    name: "appointment",
  })
  async getAppointment(
    @graphql.Parent() parent: Payments
  ): Promise<Appointments | null> {
    const result = await this.service.getAppointment(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
