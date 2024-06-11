import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StoresServiceBase } from "./base/stores.service.base";

@Injectable()
export class StoresService extends StoresServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
