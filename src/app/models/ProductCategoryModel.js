import { methodsHelper } from "../helpers/HelperIndex";
import PaginationMetaModel from "./PaginationMetaModel";

export class ProductCategoryListModel {
    
    constructor(data , pagination_meta) {
        this.categories = data;
        if(!methodsHelper.empty(pagination_meta)){
            this.pagination_meta = new PaginationMetaModel(pagination_meta);
        }
    }

    fromJson() {
        let categoriesList = [];
        this.categories.map((value) => {
            return categoriesList.push(
                new ProductCategoryModel(value)
            );
        });

        this.categories = categoriesList;
        return this;
    }

}

export class ProductCategoryModel {
    constructor(data)
    {
        this.id = data.id;
        this.name = data.name;
        this.icon = data.icon;
        this.image = data.image;
        this.sub_categories = new ProductCategoryListModel(data.sub_categories);
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
       
    }

    fromJson() {
       return this;
    }

}
