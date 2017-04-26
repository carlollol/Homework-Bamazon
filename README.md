# Homework-Bamazon

## Description

- This is command line application that takes in orders form customers and deplete the stock from the store's inventory.

## Requirements

    - Use MySQL database
    - Use Javascript to manilpulate the data

## Technologies Used

    - MySQL for Database
    - Node.js to run application
    - Inquirer NPM to prompt users to input information

## Code Explanation

    - After connecting to the proper database and and making sure that inquirer is installed, a console log of the list of products will appear after the user runs the application, followed by a prompt to the user to select what item they wish to purchase.

    - As the user makes a selection and bids on the item, an if/else statement determines whether the user response passes through the arguments.

        -- If users bid > than the product price, then reduce product stock.
