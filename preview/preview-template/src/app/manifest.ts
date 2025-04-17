import { AppConstants } from "@/constants/AppConstants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: AppConstants.SHORT_NAME,
    short_name: AppConstants.SHORT_NAME,
    description: AppConstants.SHORT_NAME,
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