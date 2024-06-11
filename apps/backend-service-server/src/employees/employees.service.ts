import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeesServiceBase } from "./base/employees.service.base";

@Injectable()
export class EmployeesService extends EmployeesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
