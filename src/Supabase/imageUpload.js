import { mysupabase } from "./Configs";
async function uploadImage(file, bucketname) {
  if (!bucketname) return "bucketname is not provided";
  const fileName = `${Date.now()}-${file.name}`; // Unique filename
  const { data, error } = await mysupabase.storage
    .from("collection-images")
    .upload(fileName, file);

  if (error) {
    console.error("Error uploading image:", error.message);
    return null;
  }

  // Get the public URL
  const { data: publicUrl } = mysupabase.storage
    .from("collection-images")
    .getPublicUrl(fileName);
  return publicUrl.publicUrl;
}
