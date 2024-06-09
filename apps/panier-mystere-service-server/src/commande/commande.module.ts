import { Module } from "@nestjs/common";
import { CommandeModuleBase } from "./base/commande.module.base";
import { CommandeService } from "./commande.service";
import { CommandeController } from "./commande.controller";
import { CommandeResolver } from "./commande.resolver";

@Module({
  imports: [CommandeModuleBase],
  controllers: [CommandeController],
  providers: [CommandeService, CommandeResolver],
  exports: [CommandeService],
})
export class CommandeModule {}
