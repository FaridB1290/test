import { Module } from "@nestjs/common";
import { PanierMystereModuleBase } from "./base/panierMystere.module.base";
import { PanierMystereService } from "./panierMystere.service";
import { PanierMystereController } from "./panierMystere.controller";
import { PanierMystereResolver } from "./panierMystere.resolver";

@Module({
  imports: [PanierMystereModuleBase],
  controllers: [PanierMystereController],
  providers: [PanierMystereService, PanierMystereResolver],
  exports: [PanierMystereService],
})
export class PanierMystereModule {}
