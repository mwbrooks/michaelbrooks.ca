Master the Command Line with Node
=================================

Fil Maj & Michael Brooks
------------------------

- Intro leading into topics
- 1. Project Structure
- 2. Documentation
- 3. Verbose
- 4. Windows
- Closing remarks

- about
    - fil maj & michael brooks

- intro
    - so in this talk, Fil and I want to share some patterns and suggestions
      for building good command-line tools in node.js.
    - by no means are we saying that you MUST do everything that we say
    - but these are concepts that we've unearthed through our own mistakes and
      we feel that it's helpful to share our learnings with you.
    - for the past few years, we've been building various command-line tools
      for our project and building ontop of other command-line tools from
      a wide variety of projects.
    - we've written them in Bash, Batch, ANT, Ruby, Python, and now we've converged on node
    - but regardless of the language, we've learned what qualities we like in command-line tools
    - and these are qualities for both user usage and programmatic usage

- a command-line interface should be testable
    - in the past; we have struggled to test; the command-line interface
    - we started with; testing with shell execution; but it was slow and unreliable
        - code sample
    - we want to; programmatically test; the command-line interface
        - code sample
    - we can do this by; thinking of the cli as a module; to the main library
        - code sample
    - first; the bin/ should be slim; acting as a proxy
        - file: bin/
        - file: bin/index.js
        - code: bin/index.js
    - second; the cli should be a module; or treated like one
        - file: lib/
        - file: lib/cli/
        - file: lib/cli/index.js
        - code: lib/cli/index.js
    - now we can; test the cli as a regular module; with high confidence
        - file: spec/
        - file: spec/cli/
        - file: spec/cli/index.spec.js
        - code: spec/cli/index.spec.js
    - third; cli module only does cli stuff; in the cli module
    - it should; keep the core logic; in the main module
    - allowing the tests to be fast; by mocking the main module
        - code: spec/cli/index.spec.js (mock example)
    - we now have a testable command-line interface; yay!

- a command-line interface should be helpful
    - the fact is; people are using your tool; and they are not omniscient gods like you
    - you need to; have good help dialogs; to guide people into the tool
    - and we know it is; really convenient to hard-code; those helpful messages
        - code sample
    - but that results in; messages being buried deep inside the code crevice; for only you to see
    - making; ammendments out of sight and out of mind; so they rarely happen
    - instead; we can do better; with something too obvious
    - you can; write you help messages as text files; to read looked up and spit out
        - file: doc/
        - file: doc/cli/
        - file: doc/cli/help.txt
        - file: doc/cli/help.init.txt
        - code: doc/cli/help.txt
    - and write code to; lookup the help messages; dynamically
        - file: lib/cli/help.js
        - code: lib/cli/help.js
    - and if a; text file isn't good enough; for you
    - then; think of it as template view; and stylize with ejs or markdown
        - file: doc/cli/help.txt
        - term: bolded colored awesomeness example

- a command-line interface should be bipolar
    - some people want; a verbose tool; for when something goes wrong
        - execution example
    - some people want; a quiet tool; for when nothing goes wrong
        - execution example
    - since the cli is decoupled; how do we implement this; with the main library?
    - we have found; event emitters are the answer; and add no extra dependencies
    - so the; main library would be verbose; like a chatty kid
        - file: lib/
        - file: lib/main
        - file: lib/main/some-file.js
        - code: lib/main/some-file.js (log, error, warn)
    - and the; cli module could subscribe; to unsubscribe to the chatty kid
        - file: lib/
        - file: lib/cli
        - file: lib/cli/index.js
        - code: lib/cli/index.js if (if --verbose || --quiet)
    - so now we are; both verbose and decoupled; between the cli and library

- a command-line interface should be worldly

- a command-line interface should be interoperable
    - lastly; it's important to play nice; with the other kids
    - if successful; a good tool is used by other tools; to build better tools
    - this means; exit codes; are critically important
        - file: lib/
        - file: lib/main/
        - file: lib/main/some-file.js
        - code: lib/main/some-file.js
    - and ideally you have; consumable output; for tools to parse
        - term: jsconf --json
        - term: jsconf --format="%d\t%s"

