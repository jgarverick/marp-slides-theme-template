# Themes (base directory)

This serves as the location of core Sass files used to construct themes, mainly to account for core element types in the Marp templates. The named CSS files are just compiled outputs from each of the named folders. There are two files to pay attention to in this directory:

- `common.scss`: Sets default colors and font sizes for `section`, `h1`, `h2`, and `h3` elements
- `title-slide.scss`: Establishes a baseline template for a `title-slide` class, which will format the page differently and more closely mirror a standard title slide in PowerPoint

There are also folder-level files that can be used instead. The [`midnight`](./midnight/) theme is an example of using a scoped title slide theme, where [`sunset`](./sunset/) uses the supplied title slide template layout. These are meant to be illustrative examples showing how themes can be built using centralized Sass files or theme-isolated Sass files.

You can always add more Sass files to deal with other slide formats and HTML elements, so long as including inline HTML in your Markdown file is set up in your configuration.