import * as graphql from "@nestjs/graphql";
import { CommandeResolverBase } from "./base/commande.resolver.base";
import { Commande } from "./base/Commande";
import { CommandeService } from "./commande.service";

@graphql.Resolver(() => Commande)
export class CommandeResolver extends CommandeResolverBase {
  constructor(protected readonly service: CommandeService) {
    super(service);
  }
}
