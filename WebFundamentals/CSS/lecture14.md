# Web Fundamentals Week 1 Lecture 4

## Introduction to CSS

### Key Concepts + Learning Goals
-


#### Outline
- CSS (Cascading Style Sheets)
  - HTML describes the content, CSS describes how it looks!
- Syntax
  - Selector { property: value }
    - not all tags have the same properties, and some have required properties
      - e.g. imgs height and width
- How/Where to put it?
  - inline
  - internal
  - external
- Selectors
  - by tag
  - by id
  - by class
  - by combinator
    - ' ' all descendants of
    -  > direct child of
    -  + adjacent to
    - ~ sibling to
    - deom on PYB
  - by pseudo-class
    - :not(selector_here)
    - Monday will be more in depth
  - by pseudo-element
    - Monday will be more in depth
  - by attribute
    - Monday will be more in depth 
  - using combinators on nested elements can make your code more readable
  - indentation rules in CSS
- Box Model
  - content
  - padding
  - border
  - margin
    - when vertical margins touch, largest one is enforced
- Display
  - inline
    - width is respected, but not height
    - elements:
      - a, img, span, input, label, select, textarea
  - block
    - width = 100%
    - not allowed in inline elements
    - elements:
      - body, div, form, h, p, table, ul, ol, li
  - inline-block
- Working with CSS
  - dev tools
  - color picker
- Demo Mode
  - build a nav bar very slowly
