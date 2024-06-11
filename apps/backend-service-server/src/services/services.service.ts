import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServicesServiceBase } from "./base/services.service.base";

@Injectable()
export class ServicesService extends ServicesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
