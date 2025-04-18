import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Layouts Vulpix Pack",
    short_name: "Layouts Vulpix Pack",
    description: "Layouts Vulpix Pack",
    display: "standalone",
    start_url: "/",
    icons: [
      {
        src: "/favicon.icon",
        sizes: "any",
        type: "image/icon",
      },
    ],
  };
}