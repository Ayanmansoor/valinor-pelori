import { mysupabase } from "./Configs";

async function acceptOrderForm(formData) {
  try {
    console.log(formData, 'FormData Received')

    const {
      name,
      email,
      phone,
      pin_code,
      state_name,
      city,
      full_address,
      final_price,
      quentity,
      discount_amount,
      product_key,
    } = formData;
    
    const { data ,error } = await mysupabase.from("orders").insert([
      {
        name,
        email,
        phone,
        pin_code,
        state_name,
        city,
        full_address,
        final_price,
        quentity,
        discount_amount,
        product_key,
      },
    ]).select();

    if (error) {
      throw new Error(error.message);
    } else {
      return {
        message: "Order successfully placed!",
        code: 200,
        isOrder: true,
        data
      };
    }
  } catch (error) {
    return new Error(error?.message || "Something went wrong.");
  }
}

export { acceptOrderForm };
