# Beep Boop Application

#### HTML, CSS, JavaScript and jQuery exercise for Epicodus, August 17, 2018

#### By **Mel Yasuda**

## Description

The Beep Boop application takes a number from a user and returns a range of numbers from 0 to the chosen number with the following exceptions:

Numbers that contain a 0 are replaced (all digits) with "Beep!"
Numbers that contain a 1 are replaced (all digits) with "Boop!"
Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that.

## Setup/Installation Requirements

* Clone this repository.
* Open the index.html file in the top level of the cloned directory

## Specifications
* Program alerts if a non-number input
  * Example Input: hello
  * Example Output: ["Please enter a number"]
* Program alerts if no input
  * Example Input: " "
  * Example Output: ["Please enter a number"]
* Program alerts if a number is a negative number
  * Example Input: -5
  * Example Output: ["Please enter a positive number"]
* Program alerts if a number is a decimal number
  * Example Input: 6.5
  * Example Output: ["Please enter a positive number"]
* Program replaces 0 with "Beep!"
  * Example Input: 0
  * Example Output: ["Beep!"]
* Program replaces 1 with "Boop!"
  * Example Input: 1, 11, 21, 115
  * Example Output: ["Beep!"]
* Program replaces 3 with "I'm sorry, Dave. I'm afraid I can't do that."
  * Example Input: 3, 23, 53, 323
  * Example Output: ["I'm sorry, Dave. I'm afraid I can't do that."]
* If a number contains 1 and 0, program replaces 1 with "Boop!"
  * Example Input: 10, 100, 105, 1035
  * Example Output: ["Boop!"]
* If a number contains 1 and 3, program replaces 3 with "I'm sorry, Dave. I'm afraid I can't do that."
  * Example Input: 13, 130, 1003, 3100
  * Example Output: ["I'm sorry, Dave. I'm afraid I can't do that."]
* If a number contains 0 and 3, program replaces 3 with "I'm sorry, Dave. I'm afraid I can't do that."
  * Example Input: 30, 301, 30001
  * Example Output: ["I'm sorry, Dave. I'm afraid I can't do that."]


## Known Bugs

There is no known bugs in this software.

## Support and contact details

Contact me at yasudamel@gmail.com for any questions about the software.

## Technologies Used

 * HTML
 * CSS
 * JavaScript
 * jQuery

### License

*This software is licensed under the MIT license.*

Copyright (c) 2018 **Mel Yasuda**
