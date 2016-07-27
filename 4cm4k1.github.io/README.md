# Anthony Maki's Resume
## Description
This was the admissions challenge for Prime Digital Academy and is the first assigned Prework challenge.
## Changelog
### 1.2 (Bonus JavaScript Challenge)
* Uploaded `bonus.js & bonus.html` 

### 1.1 (First Prework Challenge)
* Updated to HTML5/CSS3 spec
  * Added `<meta>` tags to `<head>` for search/sharing
  * Replaced all `<div>` tags with more semantic equivalents, such as `<header>, <main>, <footer>`
  * Added `<link>` to `<head>` for Normalize.css to reset browser presets before loading custom CSS
  * Added `<time>` tags to all dates
  * Changed `<header>` content to a block-displayed unordered list, which better represents the data (email, phone, address, bio)
  * Sorted CSS by hierarchy and into sections to avoid unintentional overrides & to better illustrate what's going on
    * Page-wide defaults
      * Body
      * Headings
      * Links
    * Page layout & specific tweaks
      * Header
      * Main
      * Footer
* Design changes:
  * Removed Bootstrap CSS `<link>` to challenge myself in styling it with a similar design but with my own code
  * *Rewrote entire CSS* from scratch
  * Added subtle `box-shadow` property to the dates to set it apart from the other information
  * Utilized fine-tuned CSS selectors (nested elements, `:last-child` pseudo-selectors, etc.) to get as much done design-wise with as little code as possible
  * Whenever `padding, margin & background` properties appear, shorthand or just one specific piece (*e.g. `padding-left`*) is used
  * Added "Professional Experience" heading to clarify what the subsequent information is
  * Clarified under what license the page is available in the link text
* Added this changelog!
 
Essentially, I was happy with the overall design, so only minor tweaks were made in my re-creation of what the page had looked like with Bootstrap. However, because TypeKit (where I have a subscription) doesn't provide direct links to their web fonts, I could not make any `@font-face` declarations in the CSS, so it remains added via TypeKit's JS.

### 1.0 (Admissions Challenge)
* Initial version

## Known Issues
* Now that I've committed files that do not relate to the Resume, the scope of this repo has changed, making this README and the file structure obsolete. Planning to change this.
