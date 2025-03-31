import { Link } from "react-router-dom"

export default function ShippingPolicy() {
    return (
        // <div className="container  mx-auto py-12 px-5 md:px-10 lg:px-20">
        //     <div className="space-y-8">
        //         <div className="text-center mb-10">
        //             <h1 className="text-3xl font-bold tracking-tight">Shipping Policy</h1>
        //             <p className="text-muted-foreground mt-2">Last Updated: {new Date().toLocaleDateString()}</p>
        //         </div>

        //         <section className="space-y-4">
        //             <h2 className="text-2xl font-semibold tracking-tight">Order Processing</h2>
        //             <p>
        //                 At Valinor and Pelori, we strive to process and ship your orders as quickly as possible. All orders are
        //                 processed within 1-2 business days (Monday through Friday, excluding holidays) after receiving your order
        //                 confirmation.
        //             </p>
        //             <p>
        //                 If there is a delay in processing your order, we will contact you via email or phone. Please ensure your
        //                 contact information is accurate at checkout.
        //             </p>
        //         </section>

        //         <section className="space-y-4">
        //             <h2 className="text-2xl font-semibold tracking-tight">Shipping Methods & Delivery Times</h2>
        //             <p>We offer several shipping methods to meet your needs. Estimated delivery times are as follows:</p>
        //             <div className="overflow-x-auto">
        //                 <table className="w-full  border-collapse mt-2">
        //                     <thead>
        //                         <tr className="bg-muted">
        //                             <th className="border p-2 text-left">Shipping Method</th>
        //                             <th className="border p-2 text-left">Estimated Delivery Time</th>
        //                             <th className="border p-2 text-left">Cost</th>
        //                         </tr>
        //                     </thead>
        //                     <tbody>
        //                         <tr>
        //                             <td className="border p-2">Standard Shipping</td>
        //                             <td className="border p-2">5-7 business days</td>
        //                             <td className="border p-2">$5.99 (Free on orders over $75)</td>
        //                         </tr>
        //                         <tr>
        //                             <td className="border p-2">Express Shipping</td>
        //                             <td className="border p-2">2-3 business days</td>
        //                             <td className="border p-2">$12.99</td>
        //                         </tr>
        //                         <tr>
        //                             <td className="border p-2">Next Day Delivery</td>
        //                             <td className="border p-2">1 business day (order by 12 PM)</td>
        //                             <td className="border p-2">$24.99</td>
        //                         </tr>
        //                     </tbody>
        //                 </table>
        //             </div>
        //             <p className="text-sm text-muted-foreground mt-2">
        //                 *Business days are Monday through Friday, excluding holidays. Orders placed after 2 PM may be processed the
        //                 following business day.
        //             </p>
        //         </section>

        //         <section className="space-y-4">
        //             <h2 className="text-2xl font-semibold tracking-tight">Shipping Carriers</h2>
        //             <p>Valinor and Pelori partners with the following carriers to ensure reliable and timely delivery:</p>
        //             <ul className="list-disc pl-6 space-y-1">
        //                 <li>USPS</li>
        //                 <li>FedEx</li>
        //                 <li>UPS</li>
        //                 <li>DHL (for international shipments)</li>
        //             </ul>
        //             <p>
        //                 The carrier used for your order will depend on your location, selected shipping method, and product size. We
        //                 reserve the right to change carriers at our discretion.
        //             </p>
        //         </section>

        //         <section className="space-y-4">
        //             <h2 className="text-2xl font-semibold tracking-tight">Order Tracking</h2>
        //             <p>
        //                 Once your order ships, you will receive a shipping confirmation email with a tracking number. You can track
        //                 your package by:
        //             </p>
        //             <ul className="list-disc pl-6 space-y-1">
        //                 <li>Clicking the tracking link in your shipping confirmation email</li>
        //                 <li>Logging into your Valinor and Pelori account and viewing your order history</li>
        //                 <li>Contacting our customer service team</li>
        //             </ul>
        //             <p>Please allow 24-48 hours for tracking information to update after receiving your shipping confirmation.</p>
        //         </section>

        //         <section className="space-y-4">
        //             <h2 className="text-2xl font-semibold tracking-tight">International Shipping</h2>
        //             <p>
        //                 We currently ship to over 40 countries worldwide. International shipping rates vary based on destination,
        //                 package weight, and dimensions.
        //             </p>
        //             <div className="space-y-2">
        //                 <h3 className="text-xl font-medium">International Shipping Considerations:</h3>
        //                 <ul className="list-disc pl-6 space-y-1">
        //                     <li>
        //                         <strong>Customs & Import Duties:</strong> International orders may be subject to customs fees, import
        //                         duties, taxes, or other charges imposed by the destination country. These fees are the responsibility of
        //                         the recipient and are not included in our shipping charges.
        //                     </li>
        //                     <li>
        //                         <strong>Delivery Times:</strong> International orders typically take 7-21 business days to arrive,
        //                         depending on the destination country, customs processing, and local delivery conditions.
        //                     </li>
        //                     <li>
        //                         <strong>Address Accuracy:</strong> Please ensure your shipping address is complete and accurate,
        //                         including any postal codes, to avoid delivery delays.
        //                     </li>
        //                 </ul>
        //             </div>
        //         </section>

        //         <section className="space-y-4">
        //             <h2 className="text-2xl font-semibold tracking-tight">Shipping Restrictions</h2>
        //             <p>
        //                 We are unable to ship to P.O. boxes for certain product categories, including large items like some of our
        //                 bags and footwear collections. Additionally, some products may have country-specific restrictions due to
        //                 import regulations.
        //             </p>
        //             <p>
        //                 If you have concerns about shipping restrictions to your location, please contact our customer service team
        //                 before placing your order.
        //             </p>
        //         </section>

        //         <section className="space-y-4">
        //             <h2 className="text-2xl font-semibold tracking-tight">Address Changes</h2>
        //             <p>
        //                 If you need to change your shipping address after placing an order, please contact us immediately at
        //                 orders@valinorpelori.com or call our customer service line. We will do our best to accommodate your request,
        //                 but we cannot guarantee address changes once an order has been processed.
        //             </p>
        //         </section>

        //         <section className="space-y-4">
        //             <h2 className="text-2xl font-semibold tracking-tight">Lost or Damaged Packages</h2>
        //             <p>
        //                 Valinor and Pelori is not responsible for lost or stolen packages after they have been delivered to the
        //                 address provided at checkout. If the carrier confirms delivery, but you have not received your package,
        //                 please:
        //             </p>
        //             <ol className="list-decimal pl-6 space-y-1">
        //                 <li>Check with neighbors or your building's mail room</li>
        //                 <li>Contact the carrier with your tracking number to file a claim</li>
        //                 <li>Notify our customer service team for assistance</li>
        //             </ol>
        //             <p>
        //                 If your package arrives damaged, please take photos of the damaged packaging and products, and contact our
        //                 customer service team within 48 hours of delivery.
        //             </p>
        //         </section>

        //         <section className="space-y-4">
        //             <h2 className="text-2xl font-semibold tracking-tight">Return Shipping</h2>
        //             <p>
        //                 If you need to return an item, please refer to our{" "}
        //                 <Link to="/return-policy" className="text-primary hover:underline">
        //                     Return Policy
        //                 </Link>{" "}
        //                 for detailed instructions. In summary:
        //             </p>
        //             <ul className="list-disc pl-6 space-y-1">
        //                 <li>Returns must be initiated within 30 days of delivery</li>
        //                 <li>
        //                     Return shipping costs are the responsibility of the customer, unless the return is due to our error or a
        //                     defective product
        //                 </li>
        //                 <li>We provide a prepaid return shipping label for exchanges and returns due to our error</li>
        //                 <li>International returns follow the same policy, but may have longer processing times</li>
        //             </ul>
        //         </section>

        //         <section className="space-y-4">
        //             <h2 className="text-2xl font-semibold tracking-tight">Shipping Promotions</h2>
        //             <p>Valinor and Pelori occasionally offers free or discounted shipping promotions. These promotions:</p>
        //             <ul className="list-disc pl-6 space-y-1">
        //                 <li>May have minimum purchase requirements</li>
        //                 <li>May be limited to specific shipping methods or regions</li>
        //                 <li>Cannot be combined with other shipping promotions</li>
        //                 <li>May exclude oversized or heavy items</li>
        //             </ul>
        //             <p>Promotion details will be clearly communicated during the applicable promotional period.</p>
        //         </section>

        //         <section className="space-y-4">
        //             <h2 className="text-2xl font-semibold tracking-tight">Contact Us</h2>
        //             <p>
        //                 If you have any questions about our shipping policy or need assistance with a specific order, please contact
        //                 us:
        //             </p>
        //             <div className="not-prose">
        //                 <address className="not-italic">
        //                     <p>Email: shipping@valinorpelori.com</p>
        //                     <p>Phone: [Your Customer Service Phone Number]</p>
        //                     <p>Hours: Monday-Friday, 9 AM - 5 PM [Your Time Zone]</p>
        //                 </address>
        //             </div>
        //         </section>
        //     </div>

        //     <div className="mt-12 pt-8 border-t">
        //         <div className="flex justify-between items-center">
        //             <Link to="/" className="text-primary hover:underline">
        //                 Return to Home
        //             </Link>
        //             <p className="text-sm text-muted-foreground">
        //                 © {new Date().getFullYear()} Valinor and Pelori. All rights reserved.
        //             </p>
        //         </div>
        //     </div>
        // </div>

        <div className="container mx-auto py-12 px-5 md:px-10 lg:px-20">
            <div className="space-y-8">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold tracking-tight">Shipping Policy</h1>
                    <p className="text-muted-foreground mt-2">Last Updated: {new Date().toLocaleDateString()}</p>
                </div>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight">Order Processing</h2>
                    <p>
                        At Valinor and Pelori, we strive to process and ship your orders as quickly as possible. All orders are processed
                        within 1-2 business days (Monday through Friday, excluding holidays) after receiving your order confirmation.
                    </p>
                    <p>
                        If there is a delay in processing your order, we will contact you via email or phone. Please ensure your contact
                        information is accurate at checkout.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight">Shipping Methods & Delivery Times</h2>
                    <p>We offer several shipping methods to meet your needs. Estimated delivery times are as follows:</p>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse mt-2">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border p-2 text-left">Shipping Method</th>
                                    <th className="border p-2 text-left">Estimated Delivery Time</th>
                                    <th className="border p-2 text-left">Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border p-2">Standard Shipping</td>
                                    <td className="border p-2">5-7 business days</td>
                                    <td className="border p-2">$5.99 (Free on orders over $75)</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">Express Shipping</td>
                                    <td className="border p-2">2-3 business days</td>
                                    <td className="border p-2">$12.99</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">Next Day Delivery</td>
                                    <td className="border p-2">1 business day (order by 12 PM)</td>
                                    <td className="border p-2">$24.99</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                        *Business days are Monday through Friday, excluding holidays. Orders placed after 2 PM may be processed the
                        following business day.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight">Shipping Charges for Orders Over $2000</h2>
                    <p>
                        Please note, shipping charges will apply for orders above $2000. The shipping cost will be calculated based on the
                        destination and shipping method chosen at checkout.
                    </p>
                    <p>
                        Free shipping promotions or offers will not apply to orders exceeding $2000, and shipping fees will be applied
                        based on the applicable rates for the selected shipping method.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight">Shipping Carriers</h2>
                    <p>Valinor and Pelori partners with the following carriers to ensure reliable and timely delivery:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>USPS</li>
                        <li>FedEx</li>
                        <li>UPS</li>
                        <li>DHL (for international shipments)</li>
                    </ul>
                    <p>
                        The carrier used for your order will depend on your location, selected shipping method, and product size. We
                        reserve the right to change carriers at our discretion.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight">Order Tracking</h2>
                    <p>
                        Once your order ships, you will receive a shipping confirmation email with a tracking number. You can track
                        your package by:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Clicking the tracking link in your shipping confirmation email</li>
                        <li>Logging into your Valinor and Pelori account and viewing your order history</li>
                        <li>Contacting our customer service team</li>
                    </ul>
                    <p>Please allow 24-48 hours for tracking information to update after receiving your shipping confirmation.</p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight">International Shipping</h2>
                    <p>
                        We currently ship to over 40 countries worldwide. International shipping rates vary based on destination,
                        package weight, and dimensions.
                    </p>
                    <div className="space-y-2">
                        <h3 className="text-xl font-medium">International Shipping Considerations:</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>
                                <strong>Customs & Import Duties:</strong> International orders may be subject to customs fees, import
                                duties, taxes, or other charges imposed by the destination country. These fees are the responsibility of
                                the recipient and are not included in our shipping charges.
                            </li>
                            <li>
                                <strong>Delivery Times:</strong> International orders typically take 7-21 business days to arrive,
                                depending on the destination country, customs processing, and local delivery conditions.
                            </li>
                            <li>
                                <strong>Address Accuracy:</strong> Please ensure your shipping address is complete and accurate,
                                including any postal codes, to avoid delivery delays.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight">Shipping Restrictions</h2>
                    <p>
                        We are unable to ship to P.O. boxes for certain product categories, including large items like some of our
                        bags and footwear collections. Additionally, some products may have country-specific restrictions due to
                        import regulations.
                    </p>
                    <p>
                        If you have concerns about shipping restrictions to your location, please contact our customer service team
                        before placing your order.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight">Address Changes</h2>
                    <p>
                        If you need to change your shipping address after placing an order, please contact us immediately at
                        orders@valinorpelori.com or call our customer service line. We will do our best to accommodate your request,
                        but we cannot guarantee address changes once an order has been processed.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight">Lost or Damaged Packages</h2>
                    <p>
                        Valinor and Pelori is not responsible for lost or stolen packages after they have been delivered to the
                        address provided at checkout. If the carrier confirms delivery, but you have not received your package,
                        please:
                    </p>
                    <ol className="list-decimal pl-6 space-y-1">
                        <li>Check with neighbors or your building's mail room</li>
                        <li>Contact the carrier with your tracking number to file a claim</li>
                        <li>Notify our customer service team for assistance</li>
                    </ol>
                    <p>
                        If your package arrives damaged, please take photos of the damaged packaging and products, and contact our
                        customer service team within 48 hours of delivery.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight">Return Shipping</h2>
                    <p>
                        If you need to return an item, please refer to our{" "}
                        <Link to="/return-policy" className="text-primary hover:underline">
                            Return Policy
                        </Link>{" "}
                        for detailed instructions. In summary:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Returns must be initiated within 30 days of delivery</li>
                        <li>
                            Return shipping costs are the responsibility of the customer, unless the return is due to our error or a
                            defective product
                        </li>
                        <li>We provide a prepaid return shipping label for exchanges and returns due to our error</li>
                        <li>International returns follow the same policy, but may have longer processing times</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight">Shipping Promotions</h2>
                    <p>Valinor and Pelori occasionally offers free or discounted shipping promotions. These promotions:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>May have minimum purchase requirements</li>
                        <li>May be limited to specific shipping methods or regions</li>
                        <li>Cannot be combined with other shipping promotions</li>
                        <li>May exclude oversized or heavy items</li>
                    </ul>
                    <p>Promotion details will be clearly communicated during the applicable promotional period.</p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight">Contact Us</h2>
                    <p>
                        If you have any questions about our shipping policy or need assistance with a specific order, please contact
                        us:
                    </p>
                    <div className="not-prose">
                        <address className="not-italic">
                            <p>Email: shipping@valinorpelori.com</p>
                            <p>Phone: [Your Customer Service Phone Number]</p>
                            <p>Hours: Monday-Friday, 9 AM - 5 PM [Your Time Zone]</p>
                        </address>
                    </div>
                </section>
            </div>

            <div className="mt-12 pt-8 border-t">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-primary hover:underline">
                        Return to Home
                    </Link>
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Valinor and Pelori. All rights reserved.
                    </p>
                </div>
            </div>
        </div>

    )
}

