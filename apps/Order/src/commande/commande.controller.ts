import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommandeService } from "./commande.service";
import { CommandeControllerBase } from "./base/commande.controller.base";

@swagger.ApiTags("commandes")
@common.Controller("commandes")
export class CommandeController extends CommandeControllerBase {
  constructor(protected readonly service: CommandeService) {
    super(service);
  }
}
