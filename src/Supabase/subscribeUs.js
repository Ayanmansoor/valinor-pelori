import { mysupabase } from "./Configs";

export async function getSubscribe(email) {
  try {
    const { data, error } = await mysupabase.from("subscribe").insert([
      {
        email,
      },
    ]);

    if (error) {
      return {
        message: error.message,
        code: 400,
        data: null,
      };
    } else {
      return {
        message: "Subscribe successful",
        code: 200,
        data: data,
      };
    }
  } catch (err) {
    return {
      message: err.message || "Something went wrong",
      code: 500,
      data: null,
    };
  }
}