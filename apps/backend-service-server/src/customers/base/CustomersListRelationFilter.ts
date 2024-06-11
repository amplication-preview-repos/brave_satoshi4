/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomersWhereInput } from "./CustomersWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CustomersListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CustomersWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomersWhereInput)
  @IsOptional()
  @Field(() => CustomersWhereInput, {
    nullable: true,
  })
  every?: CustomersWhereInput;

  @ApiProperty({
    required: false,
    type: () => CustomersWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomersWhereInput)
  @IsOptional()
  @Field(() => CustomersWhereInput, {
    nullable: true,
  })
  some?: CustomersWhereInput;

  @ApiProperty({
    required: false,
    type: () => CustomersWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomersWhereInput)
  @IsOptional()
  @Field(() => CustomersWhereInput, {
    nullable: true,
  })
  none?: CustomersWhereInput;
}
export { CustomersListRelationFilter as CustomersListRelationFilter };
