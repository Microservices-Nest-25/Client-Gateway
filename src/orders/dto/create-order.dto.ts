import { ArrayMinSize, IsArray, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OrderItemDto } from "./";

export class CreateOrderDto {

    // @IsNumber()
    // @IsPositive()
    // totalAmount: number;

    // @IsNumber()
    // @IsPositive()
    // totalItems: number;

    // @IsEnum( OrderStatus, { message: `Possible status values are: ${ OrderStatus }` } )
    // @IsOptional()
    // status: OrderStatus = OrderStatus.PENDING;
    
    // @IsBoolean()
    // @IsOptional()
    // paid: boolean = false;

    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    @Type(() => OrderItemDto)
    items: OrderItemDto[];

}
