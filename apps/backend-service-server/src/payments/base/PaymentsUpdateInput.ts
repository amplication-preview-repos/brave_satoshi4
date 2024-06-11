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
import {
  IsNumber,
  IsOptional,
  ValidateNested,
  IsDate,
  IsString,
} from "class-validator";
import { AppointmentsWhereUniqueInput } from "../../appointments/base/AppointmentsWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class PaymentsUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @ApiProperty({
    required: false,
    type: () => AppointmentsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AppointmentsWhereUniqueInput)
  @IsOptional()
  @Field(() => AppointmentsWhereUniqueInput, {
    nullable: true,
  })
  appointment?: AppointmentsWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  paymentDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  paymentMethod?: string | null;
}

export { PaymentsUpdateInput as PaymentsUpdateInput };
