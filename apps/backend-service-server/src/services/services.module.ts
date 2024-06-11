import { Module } from "@nestjs/common";
import { ServicesModuleBase } from "./base/services.module.base";
import { ServicesService } from "./services.service";
import { ServicesController } from "./services.controller";
import { ServicesResolver } from "./services.resolver";

@Module({
  imports: [ServicesModuleBase],
  controllers: [ServicesController],
  providers: [ServicesService, ServicesResolver],
  exports: [ServicesService],
})
export class ServicesModule {}
