![logo](https://user-images.githubusercontent.com/44912347/202296600-c5f247d6-9616-49db-88f0-38433429d781.jpg)

# Inventory App
You are a team of developers for an e-commerce company. The Engineering team  is rebuilding their inventory tracking app from the ground up. Your team has been tasked with creating a Full-Sack (front and back end) RESTful CRUD application to track the items.

## Getting Started

1. `npm install`
2. `npm run seed`
3. `npm run server-dev`
4. In a seperate terminal, `npm run client-dev`

## Inventory App “Tiers”

The tiers describe different levels of functionality in your application with the difficulty becoming more complex as you advance through the tiers. Start with Tier I, and complete everything you can, moving as quickly as possible as you can to Tier II. They are described as user stories.

Your team should strive to finish at least the first 4 tiers (a CRUD application) and attempt some of the bonus material.

### Tier I: MVP Application
- As a User, I want to view all items in inventory
  - Sequelize Model for Item
  - Name, Description, Price, Category, Image
  - Express Route to GET all Items
  - Front-end View for all Items
- As a User, I want to view any individual item
  - Express Route to GET one Item
  - Front-end view for one item (click to see)

### Tier II: Adding an Item
- As a User, I want to add an item by completing a form
  - Add Item front-end form
  - Express Route to ADD the Item
  - Form or Fetch request to add item when form is submitted

### Tier III: Deleting an Item
- As a User, I want to  remove an item from inventory
  - Delete button on Single Item View
  - Express Route to DELETE the Item
  - Fetch request to delete item when button is clicked

### Tier IV: Updating an Item
- As a User, I want to edit an item by filling a form
  - Edit form on Single Item View
  - Express Route to UPDATE the Item
  - Fetch request to update item when form is submitted

### Tier V: Bonus Stuff
- Models, Routes for Users and Orders
- As a User, I want my Inventory site to be visually stunning
- As a User, I want to be able to search through data based on search criteria
- As a User, I want to add items to a cart and purchase
- As a User, I want to use the application on a mobile browser
- As an Admin, I want all Add and Edit item requests to have server-side validations

## Front-End

### Home Page (Tier I: MVP Application)

- [ ] Header
- [ ] Navigation links (Home, Add Item, Search, Cart)
- [ ] Main Content Area
- [x] List of Items
- [ ] Each Item Card shows:
- [x] Image
- [x] Name
- [ ] Description
- [ ] Price
- [ ] Category
- [ ] Clicking on an item card navigates to Individual Item View.

### Individual Item View (Tier I)

- [ ] Header (same as Home Page)
- [ ] Item Detail Section
- [ ] Large Image of Item
- [ ] Name
- [ ] Full Description
- [ ] Price
- [ ] Category
- [ ] Actions
- [ ] Edit Button (navigates to Edit Item Form)
- [ ] Delete Button

### Add Item Form (Tier II)

- [ ] Form Fields
- [ ] Name (text input)
- [ ] Description (textarea)
- [ ] Price (number input)
- [ ] Category (dropdown selection)
- [ ] Image (file upload)
- [ ] Submit Button
- [ ] To add the item

### Edit Item Form (Tier IV)
- [ ] Form Fields (pre-filled with existing item data)
- [ ] Name (text input)
- [ ] Description (textarea)
- [ ] Price (number input)
- [ ] Category (dropdown selection)
- [ ] Image (file upload)
- [ ] Save Changes Button

### Additional Features (Tier V)
- [ ] Search Bar (on Home Page)
- [ ] Allows filtering items by name, category, etc.
- [ ] Shopping Cart
- [ ] Icon on Header
- [ ] Clicking opens a dropdown/popup showing added items and checkout option.
- [ ] Responsive Design
- [ ] Ensure the layout adjusts for mobile browsers.
- [ ] Backend Routes Integration (All Tiers)

## Back-End

### Tier I
- [x] Route to GET all items (for Home Page)
- [x] Route to GET one item (for Individual Item View)

### Tier II
- [ ] Route to POST a new item (for Add Item Form)

### Tier III
- [ ] Route to DELETE an item (from Individual Item View)

### Tier IV
- [ ] Route to PUT (update) an item (from Edit Item Form)
