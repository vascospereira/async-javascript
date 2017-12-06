# async-javascript
Asynchronous JavaScript + XML/JSON (AJAX), Callbacks, Promises and Generators.

To send an HTTP request, create an XMLHttpRequest object, open a URL, and send the request.
After the transaction completes, the object will contain useful information such as the response body and the HTTP status of the result.

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

Promises in JavaScript represent processes which are already happening, which can be chained with callback functions. A promise is said to be 'settled' if it is either fulfilled or rejected, but not pending. The term 'resolved' used with promises means that the promise is fulfilled.

Generators are functions that can be paused and resumed. The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.
Generators are functions which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.
Calling a generator function does not execute its body immediately; an iterator object for the function is returned instead. When the iterator's next() method is called, the generator function's body is executed until the first yield expression, which specifies the value to be returned from the iterator or, with yield*, delegates to another generator function. The next() method returns an object with a value property containing the yielded value and a done property which indicates whether the generator has yielded its last value as a boolean. Calling the next() method with an argument will resume the generator function execution, replacing the yield expression where execution was paused with the argument from next(). 
A return statement in a generator, when executed, will make the generator done. If a value is returned, it will be passed back as the value. A generator which has returned will not yield any more values.
