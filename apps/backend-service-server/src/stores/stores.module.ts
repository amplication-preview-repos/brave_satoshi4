import { Module } from "@nestjs/common";
import { StoresModuleBase } from "./base/stores.module.base";
import { StoresService } from "./stores.service";
import { StoresController } from "./stores.controller";
import { StoresResolver } from "./stores.resolver";

@Module({
  imports: [StoresModuleBase],
  controllers: [StoresController],
  providers: [StoresService, StoresResolver],
  exports: [StoresService],
})
export class StoresModule {}
