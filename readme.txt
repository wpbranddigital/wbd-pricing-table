===  WBD Pricing Tables ===
Contributors:      wpbranddigital25
Tags:              block, pricing, table, plans, comparison
Stable tag:        1.1.2
Requires at least: 6.5
Tested up to: 7.0
Requires PHP: 7.4
License:           GPLv2 or later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

A beautiful, fully customizable pricing table for Gutenberg. Display your pricing plans with features, buttons, and highlighted recommended.

== Description ==

**Pricing Tables Block for Gutenberg** is a powerful and easy-to-use WordPress pricing table plugin that helps you create stunning **pricing tables**, **pricing comparison tables**, and **pricing plans layouts** directly inside the block editor.
Whether you're building SaaS pricing pages, product comparison tables, or service plans — this Gutenberg pricing table block gives you full control without any coding.Lightweight, fast, and fully responsive — works with every WordPress theme.

🚀 Perfect for freelancers, agencies, SaaS, startups, and WooCommerce websites.

 
= Features =

### ✅ Free Features
 
* ** Free Templates** - Add up to 3 pricing plans displayed side by side in a responsive grid.
* **Customizable Plan Details** — Set plan name, price, currency symbol, billing period, and description for each plan.
* **Feature Lists** — Add unlimited features per plan with optional checkmark or cross icons to indicate included/excluded features.
* **Call-to-Action Buttons** — Customize button text and URL for each plan with option to open links in a new tab.
* **Featured/Recommended Plan** — Highlight a plan as "recommended" with a badge and visual emphasis.
* **Color Customization** — Choose header background color, header text color, button color, button text color, and featured plan accent color.
* **Layout Options** — Choose between 1 to 4 columns layout.
* **Responsive Design** — Plans stack gracefully on smaller screens.
* **Live Preview** — See all changes in real time within the editor.


### ⚡ Pro Version Features
 
If you need even more features, styling options, or premium support, you can upgrade to the Pro version:
 
* **Additional Premium Templates & Themes**
* **Advanced Styling & Layout Controls**
* **Priority Support** — Dedicated help within 24 hours


🔥 **Why Choose This Pricing Table Block Plugin?**

* Built specifically for **Gutenberg (Block Editor)**
* Lightweight and fast loading (better SEO performance)
* Fully responsive pricing table design
* No shortcode required – 100% block-based
* Clean UI inspired by modern SaaS pricing tables


💡 **Use Cases**

* SaaS pricing pages
* Service pricing plans
* Product comparison tables
* Subscription plans
* Agency packages

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/pricing-table` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress.
3. In the block editor, search for "Pricing Table" and add the block to your page.

== Frequently Asked Questions ==

= How many plans can I add? =

You can add up to 6 pricing plans in a single block.

= Can I highlight a recommended plan? =

Yes! Each plan has a "Featured" toggle that adds a visual badge and elevated styling.

= Is the block responsive? =

Yes, the pricing table is fully responsive and adapts to all screen sizes.

== Screenshots ==

1. Pricing table with three plans in the editor.
2. ThemeOne
3. ThemeTwo
4. ThemeThree
5. ThemeFour
6. ThemeFive
7. ThemeSix

== Changelog ==

= 1.1.2 =
* Compliance update: Remove all Freemius premium feature gating and overlays. All built-in templates and layouts are now 100% free and functional.
* Remove auto-deactivation hook to prevent deactivating other plugins without consent.
* Document public repository source code and build steps in the readme.
* Bump version and tested up to tags.

= 1.1.1 =
* Fix conflict with Pro version.
* Fixed Theme Style Problem

= 1.1.0 =
* Add new Layout Style theme.
* Performance optimazation.

= 1.0.0 =
* Initial release with full pricing table functionality.

== Upgrade Notice ==

= 1.1.0 =
* Add new Layout Style theme.
* Performance optimazation.

= 1.0.0 =
* Initial release

== Development ==

The uncompiled source code for this plugin is fully open-source and publicly accessible.

* **Source Code Repository:** https://github.com/wpbranddigital/wbd-pricing-table
* **Source Folder:** The human-readable and modifiable source files are included in the `/src` directory of the plugin.

Build tools and environment:
- Node.js & npm
- webpack
- @wordpress/scripts

To regenerate the compiled files from source:
1. Clone the repository or navigate to the plugin directory.
2. Run `npm install` to install dependencies.
3. Run `npm run build` to compile the production assets into the `/build` directory.
4. Run `npm run start` to start the development watcher.
