# Tasks and project for my Emerging Technologies module
Below will be all the explanations on my tasks in this module.

## Task 1: Third-order letter approximation model
* Defined a method to clean the text. 
* It opens the text file, finds the start and end words and slices that chunk out and only keeps that part.
* It converts everything to uppercase and only keeps the letters A-Z.
* Now I get five different books and run it through that method and add them all to one string.
* Goes through the entire text and finds every trigram and puts it in to a dictionary.

## Task 2: Third-order letter approximation generation
* Start with "TH".
* Loop through the dictionary of trigrams. 
* Find the trigrams that includes the last two characters to get the weights.
* Use the weights to predict what to add next.

## Task 3: Analysing my model
* Read in a list of real English words from a file.
* Defined a method to calculate the percentage of real words in the generated text.
* Split the generated text into individual words and check each word against the list of real words.
* Calculate and return the percentage of words that are real.

## Task 4: Exporting my model as JSON
* Export the trigram model dictionary as a JSON file.
* Use the `json` module to write the dictionary to a file named `trigrams.json`.
* Print a confirmation message once the export is complete.

## Project: Eliza chat bot
