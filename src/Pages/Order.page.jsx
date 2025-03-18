import React from "react";
import Address from "@/component/ForOrder/Address";
import ProductDetail from "@/component/ForOrder/ProductDetail";
import OrderSummary from "@/component/ForOrder/OrderSummary";
function Order() {
    return (
        <>
      
        <section className="relative h-auto bg-secondary w-full ">
            <div className="container mx-auto w-full h-auto grid grid-cols-2 gap-5 py-5 lg:grid-cols-3 px-3 ">
                {/* product Detail */}
                <ProductDetail/>
                {/* Address section  */}
                <Address/>
                {/* order Summary */}
                <OrderSummary/>
            </div>
        </section>
    </>
    );
}

export default Order;
