Dependency-Injection-in-JavaScript
==================================

Dependency Injection using [cujo.js](http://cujojs.com).

The original version required putting Injector-specific code into the application component code, thereby coupling application code directly to the particular dependency injection framework.  This also requires extra mocking in order to unit test--the Injector itself must be mocked, at least to a noop, in order to unit test.

In this version, there is no cujo.js specific code in application component code.  Composition is done externally to all application components.

The original version relied on application global variables (`OtherGreeter` and `RobotGreeter`), and a dependency injection framework global (`Injector`).  The cujo.js version has no application globals, and no dependency injection framework globals.  It does rely on the `curl` module loader global, but the original relied on the `$script` loader global, so they are equivalent in that regard.

Rather than rely on globals, the cujo.js version uses CommonJS modules for application components.  These modules are portable to any CommonJS environment, including Node, etc.  This allows for fast, easy Node-based unit testing of non-DOM modules.  These tests can also be extended to the browser.

## Run the example

1. `bower install`
2. Open `index.html`

## Directory Structure

- scripts
    - components
        - greeter.js
        - greeter_other.js
        - greeter_robot.js
    - app.js (also in the original)
    - loader.js (also in the original)
- index.html