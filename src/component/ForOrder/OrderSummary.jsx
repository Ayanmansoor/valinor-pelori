import React, { useState } from 'react'

function OrderSummary() {
    const [PaymentMethod,setPaymentMethod]=useState({
        COD:false,
        COP:false,
        Online:false,
    })

  
    return (
        <section className="h-full p-4 w-full relative overflow-y-auto overflow-x-hidden row-start-2 row-end-3 border col-start-1 col-end-3 md:col-start-2 lg:row-start-1 lg:col-start-3 lg:col-end-4 ">
            <h2 className="text-h2 text-third font-medium ">Order Summary</h2>
            <hr className="w-full color-third" />
            <div className=" flex items-center w-fit mx-auto bg-white overflow-hidden py-[3px] rounded-3xl mt-5 mb-5 ">
                <input
                    type="text"
                    placeholder="Enter the Coupon code "
                    className="border-none px-2 py-1 bg-white focus:outline-none w-[170px] md:w-auto  "
                />
                <button className="roundad-2xl bg-primary text-p18 text-primary-foreground rounded-3xl px-2 py-1 border border-transparent  hover:bg-secondary hover:text-secondary-foreground hover:border-primary ">
                    Apply Coupon
                </button>
            </div>
            <hr className="w-full color-third" />
            <h2 className="text-h2 text-third font-medium py-4 ">
                Payment Details
            </h2>
            <hr className="w-full color-third" />
            <div className="mb-3 mt-3 flex items-center gap-3">
                <input
                    type="checkbox"
                    name="checkbox"
                    className="rounded-3xl w-5 h-5 "
                    checked={PaymentMethod.COD}
                    onChange={(e)=>(PaymentMethod.COD ? setPaymentMethod({...setPaymentMethod,COD:false,}):setPaymentMethod({...setPaymentMethod,COD:true}))}
                    
                />
                <label htmlFor="checkbox"> Cash On Delivery</label>
            </div>
            <div className="mb-3 mt-3 flex items-center gap-3">
                <input
                    type="checkbox"
                    name="checkbox"
                    className="rounded-3xl w-5 h-5"
                    checked={PaymentMethod.Online}
                    onChange={(e)=>(PaymentMethod.Online ? setPaymentMethod({...setPaymentMethod,Online:false,}):setPaymentMethod({...setPaymentMethod,Online:true}))}
                    
                />
                <label htmlFor="checkbox" className="">
                   GooglePay
                </label>
            </div>
            <div className="mb-3 mt-3 flex items-center gap-3">
                <input
                    type="checkbox"
                    name="checkbox"
                    className="rounded-3xl w-5 h-5 "
                    checked={PaymentMethod.COP}
                    onChange={(e)=>(PaymentMethod.COP ? setPaymentMethod({...setPaymentMethod,COP:false,}):setPaymentMethod({...setPaymentMethod,COP:true}))}
                    
                />
                <label htmlFor="checkbox"> Credit Or Debit Card</label>
            </div>
            <div className="flex items-center gap-3"></div>

            <div
                class="max-w-3xl mx-auto p-6   bg-white rounded shadow-sm my-6"
                id="invoice"
            >
                {/* <!-- Invoice Items --> */}
                <div class="-mx-4 mt-8 flow-root sm:mx-0">
                    <table class="min-w-full">
                        <colgroup>
                            <col class="w-full sm:w-1/2" />
                            <col class="sm:w-1/6" />
                            <col class="sm:w-1/6" />
                            <col class="sm:w-1/6" />
                        </colgroup>
                        <thead class="border-b border-gray-300 text-gray-900">
                            <tr>
                                <th
                                    scope="col"
                                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                >
                                    Items
                                </th>
                                <th
                                    scope="col"
                                    class="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                                >
                                    Quantity
                                </th>
                                <th
                                    scope="col"
                                    class="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                                >
                                    Price
                                </th>
                                <th
                                    scope="col"
                                    class="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0"
                                >
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            { }
                            <tr class="border-b border-gray-200">
                                <td class="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                                    <div class="font-medium text-gray-900">
                                        E-commerce Platform
                                    </div>
                                    <div class="mt-1 truncate text-gray-500">
                                        Laravel based e-commerce platform.
                                    </div>
                                </td>
                                <td class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                                    500.0
                                </td>
                                <td class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                                    $100.00
                                </td>
                                <td class="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                                    $5,000.00
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th
                                    scope="row"
                                    colSpan="3"
                                    class="hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                                >
                                    Subtotal
                                </th>
                                <th
                                    scope="row"
                                    class="pl-6 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden"
                                >
                                    Subtotal
                                </th>
                                <td class="pl-3 pr-6 pt-6 text-right text-sm text-gray-500 sm:pr-0">
                                    $10,500.00
                                </td>
                            </tr>
                            <tr>
                                <th
                                    scope="row"
                                    colspan="3"
                                    class="hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                                >
                                    Tax
                                </th>
                                <th
                                    scope="row"
                                    class="pl-6 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden"
                                >
                                    Tax
                                </th>
                                <td class="pl-3 pr-6 pt-4 text-right text-sm text-gray-500 sm:pr-0">
                                    $1,050.00
                                </td>
                            </tr>
                            <tr>
                                <th
                                    scope="row"
                                    colspan="3"
                                    class="hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                                >
                                    Discount
                                </th>
                                <th
                                    scope="row"
                                    class="pl-6 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden"
                                >
                                    Discount
                                </th>
                                <td class="pl-3 pr-6 pt-4 text-right text-sm text-gray-500 sm:pr-0">
                                    - 10%
                                </td>
                            </tr>
                            <tr>
                                <th
                                    scope="row"
                                    colspan="3"
                                    class="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
                                >
                                    Total
                                </th>
                                <th
                                    scope="row"
                                    class="pl-6 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"
                                >
                                    Total
                                </th>
                                <td class="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                                    $11,550.00
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <div class="border-t-2 pt-4 text-xs text-gray-500 text-center mt-16">
                    Please pay the invoice before the due date. You can pay the
                    invoice by logging in to your account from our client portal.
                </div>
            </div>

            <button className="roundad-2xl bg-primary text-primary-foreground rounded-3xl px-2 py-1 border border-transparent hover:bg-secondary hover:text-secondary-foreground hover:border-primary ">
                Download invoice
            </button>
        </section>
    )
}

export default OrderSummary