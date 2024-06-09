import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommandeServiceBase } from "./base/commande.service.base";

@Injectable()
export class CommandeService extends CommandeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
