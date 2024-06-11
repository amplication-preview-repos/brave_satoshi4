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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { EmployeesWhereUniqueInput } from "../../employees/base/EmployeesWhereUniqueInput";
import { Type } from "class-transformer";
import { EmployeesCreateNestedManyWithoutStoresItemsInput } from "./EmployeesCreateNestedManyWithoutStoresItemsInput";
import { ServicesWhereUniqueInput } from "../../services/base/ServicesWhereUniqueInput";
import { ServicesCreateNestedManyWithoutStoresItemsInput } from "./ServicesCreateNestedManyWithoutStoresItemsInput";

@InputType()
class StoresCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => EmployeesWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmployeesWhereUniqueInput)
  @IsOptional()
  @Field(() => EmployeesWhereUniqueInput, {
    nullable: true,
  })
  employees?: EmployeesWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => EmployeesCreateNestedManyWithoutStoresItemsInput,
  })
  @ValidateNested()
  @Type(() => EmployeesCreateNestedManyWithoutStoresItemsInput)
  @IsOptional()
  @Field(() => EmployeesCreateNestedManyWithoutStoresItemsInput, {
    nullable: true,
  })
  employeesItems?: EmployeesCreateNestedManyWithoutStoresItemsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;

  @ApiProperty({
    required: false,
    type: () => ServicesWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ServicesWhereUniqueInput)
  @IsOptional()
  @Field(() => ServicesWhereUniqueInput, {
    nullable: true,
  })
  services?: ServicesWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ServicesCreateNestedManyWithoutStoresItemsInput,
  })
  @ValidateNested()
  @Type(() => ServicesCreateNestedManyWithoutStoresItemsInput)
  @IsOptional()
  @Field(() => ServicesCreateNestedManyWithoutStoresItemsInput, {
    nullable: true,
  })
  servicesItems?: ServicesCreateNestedManyWithoutStoresItemsInput;
}

export { StoresCreateInput as StoresCreateInput };