# Hannah Dell's Website

This is the frontend for a mathematician's personal website. Data is imported using `json` files in the `src/data` directory, and content is updated as such using these files, so that the user can update their website quickly and easily, without having to connect to a server. In particular, there is an expectation only for limited knowledge of coding and `html` for the user to update the content of their website.

## Installation

Node.js must be installed on the user's machine. Fork and clone the repository locally before running `npm install` to install the dependencies. To run a development branch of the repo, run the command `npm run dev`. When ready to build and deploy, run the command `npm run build`.

## Usage

### Changing Colour Theme
The basic colours used with their hexcodes are specified in the `src/index.css` file. You can adapt these as you see appropriate.

Use, for example, [this colour picker](https://htmlcolorcodes.com/color-picker/) to generate hex codes. 

### Modifying Data

The data `json` files located at `src/json` can be used to update the pages of the website.

#### Special pages

**Talks**, **Teaching**, **Travel** and **Research** are special pages with predetermined layouts; table entries and article summaries can be . For each row/article, set `pinned` to `true` in the respective `json` file for it to appear on the homepage.

The **Teaching** pages have an additional option to add lecture course information. Here a description attribute can be added to the document, as well as the `lectures` field. The `lectures` field consists of a path name for users to reach the page at `/teaching/path-name-here`. A table of lectures can then be provided, along with as many materials for each lecture (such as notes, homework, other sources...) for each lecture/week/whatever you want! Such course pages can also be pinned to the navbar by setting the `isOnNavbar` attribute to true.

#### Updating body of pages
Pages can have their introductory text in the body updated by updating the `content` attribute of the `pages.json` file.

`content.html` is the `html` required for the main body of text at the start of each webpage. `content.image` requires a relative path and alt text for an image that floats to the top right of the `html` content. LaTeX rendering is supported in this attribute, using `\\( LaTeX here \\)`.

**Important!** Ensure that you escape all special characters, such as backslashes and single/double quotes using a backslash.

#### Creating new pages
Basic structures of new pages can be created using the `pages.json` file. Define case sensitive names and abbreviated names, the path to the page and the content. Ensure that `isSpecialPage` is set to `false`. Decide whether you want the page on the navbar using the `isOnNavBar` attribute.

## Contact

For questions about the content on the website, contact Hannah Dell by email via `hdell (at) math (dot) uni-bonn (dot) de`.

For questions about the code, feel free to contact me via `thomas.m.osborne.2 (at) gmail (dot) com`.






