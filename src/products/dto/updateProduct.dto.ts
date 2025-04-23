import { PartialType } from "@nestjs/mapped-types";
import { CreateProductsDto } from "./products.dto/products.dto";

export class UpdateProductsDto extends PartialType(CreateProductsDto){};