/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ReviewsService } from "../reviews.service";
import { ReviewsCreateInput } from "./ReviewsCreateInput";
import { Reviews } from "./Reviews";
import { ReviewsFindManyArgs } from "./ReviewsFindManyArgs";
import { ReviewsWhereUniqueInput } from "./ReviewsWhereUniqueInput";
import { ReviewsUpdateInput } from "./ReviewsUpdateInput";

export class ReviewsControllerBase {
  constructor(protected readonly service: ReviewsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Reviews })
  async createReviews(
    @common.Body() data: ReviewsCreateInput
  ): Promise<Reviews> {
    return await this.service.createReviews({
      data: {
        ...data,

        customer: data.customer
          ? {
              connect: data.customer,
            }
          : undefined,

        employee: data.employee
          ? {
              connect: data.employee,
            }
          : undefined,

        service: data.service
          ? {
              connect: data.service,
            }
          : undefined,
      },
      select: {
        comments: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        employee: {
          select: {
            id: true,
          },
        },

        id: true,
        rating: true,

        service: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Reviews] })
  @ApiNestedQuery(ReviewsFindManyArgs)
  async reviewsItems(@common.Req() request: Request): Promise<Reviews[]> {
    const args = plainToClass(ReviewsFindManyArgs, request.query);
    return this.service.reviewsItems({
      ...args,
      select: {
        comments: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        employee: {
          select: {
            id: true,
          },
        },

        id: true,
        rating: true,

        service: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Reviews })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async reviews(
    @common.Param() params: ReviewsWhereUniqueInput
  ): Promise<Reviews | null> {
    const result = await this.service.reviews({
      where: params,
      select: {
        comments: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        employee: {
          select: {
            id: true,
          },
        },

        id: true,
        rating: true,

        service: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Reviews })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateReviews(
    @common.Param() params: ReviewsWhereUniqueInput,
    @common.Body() data: ReviewsUpdateInput
  ): Promise<Reviews | null> {
    try {
      return await this.service.updateReviews({
        where: params,
        data: {
          ...data,

          customer: data.customer
            ? {
                connect: data.customer,
              }
            : undefined,

          employee: data.employee
            ? {
                connect: data.employee,
              }
            : undefined,

          service: data.service
            ? {
                connect: data.service,
              }
            : undefined,
        },
        select: {
          comments: true,
          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          employee: {
            select: {
              id: true,
            },
          },

          id: true,
          rating: true,

          service: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Reviews })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteReviews(
    @common.Param() params: ReviewsWhereUniqueInput
  ): Promise<Reviews | null> {
    try {
      return await this.service.deleteReviews({
        where: params,
        select: {
          comments: true,
          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          employee: {
            select: {
              id: true,
            },
          },

          id: true,
          rating: true,

          service: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
