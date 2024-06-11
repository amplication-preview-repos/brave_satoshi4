import { Module } from "@nestjs/common";
import { EmployeesModuleBase } from "./base/employees.module.base";
import { EmployeesService } from "./employees.service";
import { EmployeesController } from "./employees.controller";
import { EmployeesResolver } from "./employees.resolver";

@Module({
  imports: [EmployeesModuleBase],
  controllers: [EmployeesController],
  providers: [EmployeesService, EmployeesResolver],
  exports: [EmployeesService],
})
export class EmployeesModule {}
