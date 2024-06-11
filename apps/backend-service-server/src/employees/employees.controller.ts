import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeesService } from "./employees.service";
import { EmployeesControllerBase } from "./base/employees.controller.base";

@swagger.ApiTags("employees")
@common.Controller("employees")
export class EmployeesController extends EmployeesControllerBase {
  constructor(protected readonly service: EmployeesService) {
    super(service);
  }
}
