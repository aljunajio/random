import {gql} from "@apollo/client";

export const orderProductsQuery = () =>{
    const GET_ORDER_PRODUCTS = gql`
        query getOrderProducts {
            kus_order_products {
                backbone_core_system_code
                created_at
                id
                order_id
                product_category_name
                product_cost
                product_id
                product_name
                product_price
                structural_procedure_fee
                updated_at
            }
        }
    `
    return {
        GET_ORDER_PRODUCTS
    }
}