export default {
  name: "product",
  title: "Produk Weninga",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nama Produk",
      type: "string",
    },
    {
      name: "price",
      title: "Harga",
      type: "string",
    },
    {
      name: "description",
      title: "Deskripsi Singkat",
      type: "text",
    },
    {
      name: "image",
      title: "Foto Produk",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "shopeeLink",
      title: "Link Shopee",
      type: "url",
    },
  ],
};
