import * as graphql from "@nestjs/graphql";
import { EmployeesResolverBase } from "./base/employees.resolver.base";
import { Employees } from "./base/Employees";
import { EmployeesService } from "./employees.service";

@graphql.Resolver(() => Employees)
export class EmployeesResolver extends EmployeesResolverBase {
  constructor(protected readonly service: EmployeesService) {
    super(service);
  }
}
