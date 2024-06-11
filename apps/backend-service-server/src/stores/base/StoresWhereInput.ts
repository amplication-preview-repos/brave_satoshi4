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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { EmployeesWhereUniqueInput } from "../../employees/base/EmployeesWhereUniqueInput";
import { EmployeesListRelationFilter } from "../../employees/base/EmployeesListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ServicesWhereUniqueInput } from "../../services/base/ServicesWhereUniqueInput";
import { ServicesListRelationFilter } from "../../services/base/ServicesListRelationFilter";

@InputType()
class StoresWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  address?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

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
  employees?: EmployeesWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => EmployeesListRelationFilter,
  })
  @ValidateNested()
  @Type(() => EmployeesListRelationFilter)
  @IsOptional()
  @Field(() => EmployeesListRelationFilter, {
    nullable: true,
  })
  employeesItems?: EmployeesListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  phone?: StringNullableFilter;

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
  services?: ServicesWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ServicesListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ServicesListRelationFilter)
  @IsOptional()
  @Field(() => ServicesListRelationFilter, {
    nullable: true,
  })
  servicesItems?: ServicesListRelationFilter;
}

export { StoresWhereInput as StoresWhereInput };