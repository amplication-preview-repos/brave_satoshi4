import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StoresService } from "./stores.service";
import { StoresControllerBase } from "./base/stores.controller.base";

@swagger.ApiTags("stores")
@common.Controller("stores")
export class StoresController extends StoresControllerBase {
  constructor(protected readonly service: StoresService) {
    super(service);
  }
}
