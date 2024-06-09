import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PanierMystereService } from "./panierMystere.service";
import { PanierMystereControllerBase } from "./base/panierMystere.controller.base";

@swagger.ApiTags("panierMysteres")
@common.Controller("panierMysteres")
export class PanierMystereController extends PanierMystereControllerBase {
  constructor(protected readonly service: PanierMystereService) {
    super(service);
  }
}
