# LAB: Node Ecosystem

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

#### Getting Started
In the `startr_code` folder, there is a partial implementation of a "validator" module

In the `root` of that folder, you'll find a file called `index.js` that wires in the validator module and attempts to run functions imported from it.

In the `__tests__` folder, you'll find a file called `validator.test.js` that wires in the validator module, sets up some testing (optimistically) but contains no test code

## Requirements

### Developer Implementation
**USE TDD Practices**

Write an object validation module that exports a "validate" method that can, based on the inputs, validate whether or not an entity is satisfactory. 

Things we want to be able to validate

* Is the entity itself the right type (array, object, function etc)
* All all "required" properties present and do they have values?
  * Input needs to be an object
  * Rules needs to be an object too that defines the required properties
  * and ethe expected values
* For any property that specifies a type, does the value match that type?


* Recommended approach:
- Implement one numeric rule
- Implement one type-based rule
- Implement the required properties rule
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty ;) ;)

#### Testing
*Validation Module* 
* Test each method for proper/improper use (required params)
* Validate that validation is reliable
* Validate proper error conditions/returns

***Software Engineering Note!***
*Externalizing type checking and argument validation is a good exercise in refactoring code*

---

### End User Implementation
* Use the `index.js` file to validate objects using the imported functions from the module
* `console.log()` the return values


### Assignemnt Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations

