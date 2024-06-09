import * as graphql from "@nestjs/graphql";
import { PanierMystereResolverBase } from "./base/panierMystere.resolver.base";
import { PanierMystere } from "./base/PanierMystere";
import { PanierMystereService } from "./panierMystere.service";

@graphql.Resolver(() => PanierMystere)
export class PanierMystereResolver extends PanierMystereResolverBase {
  constructor(protected readonly service: PanierMystereService) {
    super(service);
  }
}
