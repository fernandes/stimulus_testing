# Stimulus Testing

[![Build Status](https://travis-ci.com/fernandes/stimulus_testing.svg?branch=master)](https://travis-ci.com/fernandes/stimulus_testing)

This repo is a PoC that implements:

- A super simple stimulus [controller](https://github.com/fernandes/stimulus_testing/blob/master/app/javascript/controllers/counter_controller.js) that increases/decreases a counter
- A [test](https://github.com/fernandes/stimulus_testing/blob/master/app/javascript/controllers/__tests__/counter_controller_test.js) for the counter controller
- A [setupTests](https://github.com/fernandes/stimulus_testing/blob/master/app/javascript/setupTests.js) file to configure Jest and specially configure the `MutationObserver` shim
- Configure Jest on the [package.json](https://github.com/fernandes/stimulus_testing/blob/93f8c06a03055a70875e50b565aac5e8248a1873/package.json#L22-L33) to use setup file and configure folders correctly
- Also has a different [test file](https://github.com/fernandes/stimulus_testing/blob/93f8c06a03055a70875e50b565aac5e8248a1873/app/javascript/controllers/__tests__/counter_controller_testing_library_test.js) using [testing-library](https://testing-library.com) with [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom) assertions
