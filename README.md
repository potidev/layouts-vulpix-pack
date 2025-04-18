![](../.github/assets/svg/logo.svg)

# Potidev - React Vulpix Pack

[![](https://img.shields.io/badge/Beta-0.0.11-purple)](https://www.npmjs.com/package/@potidev/layouts-vulpix-pack)

# Description

TODO...

# Setup

## Setup Shadcn/ui in Vulpix Pack

1. Install Shadcn/ui dependencies:

```bash
npm install tailwindcss-animate class-variance-authority clsx tailwind-merge lucide-react @potidev/react-vulpix-pack
```

```bash
npm install -D tailwindcss postcss autoprefixer
```

2. Configure the path aliases in your `tsconfig.json` file.

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

3. Configure `tailwind.config.js`. Here's what ours file looks like: [tailwind.config.js](tailwind.config.js).

3. Configure `postcss.config.js`. Here's what ours file looks like: [postcss.config.js](postcss.config.js).

4. Add the following to your [global.css](src/styles/css/global.css) file and import. You can learn more about using CSS variables for [theming in the theming section of shadcn ui doc](https://ui.shadcn.com/docs/theming).

5. Add this line in your global.css to tailwind detect the classes from vulpix like [this documentation](https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-registering-sources):

```css
@source "../node_modules/@potidev/react-vulpix-pack";
@source "../node_modules/@potidev/layouts-vulpix-pack";
```

6. **If you are on a NextJS project**, add these lines in your `next.config.js`:

```javascript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  transpilePackages: ["@potidev/react-vulpix-pack", "@potidev/layouts-vulpix-pack"],
  // Other settings...
};

export default nextConfig;
```

7. To use dark-mode, follow the [shadcn-ui documentation](https://ui.shadcn.com/docs/dark-mode).

8. In the original shadcn-ui documentation, there are other steps that are not necessary when using the vulpix pack. That's it.
