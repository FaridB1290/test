/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PanierMystereWhereInput } from "./PanierMystereWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PanierMystereOrderByInput } from "./PanierMystereOrderByInput";

@ArgsType()
class PanierMystereFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PanierMystereWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PanierMystereWhereInput, { nullable: true })
  @Type(() => PanierMystereWhereInput)
  where?: PanierMystereWhereInput;

  @ApiProperty({
    required: false,
    type: [PanierMystereOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PanierMystereOrderByInput], { nullable: true })
  @Type(() => PanierMystereOrderByInput)
  orderBy?: Array<PanierMystereOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PanierMystereFindManyArgs as PanierMystereFindManyArgs };