import { methodsHelper } from "../helpers/HelperIndex";
import PaginationMetaModel from "./PaginationMetaModel";

export class ProductListModel {
    
    constructor(data , pagination_meta = null) {
        this.products = data;
        if(!methodsHelper.empty(pagination_meta)){
            this.pagination_meta = new PaginationMetaModel(pagination_meta);
        }
    }

    fromJson() {
        let productsList = [];
        this.products.map((value) => {
            return productsList.push(
                new ProductModel(value)
            );
        });

        this.products = productsList;
        return this;
    }

}

export class ProductModel {
    constructor(data)
    {
        this.id = data.id ?? "";
        this.name = data.name;
        this.display_image = data.display_image ?? "";
        this.type = data.type ?? "";
        this.price = data.price ?? "";
        this.discount = data.discount ?? "";
    }

    fromJson() {
       return this;
    }
}
