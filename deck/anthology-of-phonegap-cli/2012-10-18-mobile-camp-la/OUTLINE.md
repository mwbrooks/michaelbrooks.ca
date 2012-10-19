# An Anthology of PhoneGap CLI

> a look at the evolution of our command-line interface

## Evolutionary Look at the Command-Line Interface

[!sketch-of-a-mechanical-machine]

## 1. Platform Build Chain

- In the wild west, it was every platform for itself.
- BlackBerry and webOS were the pioneers of CLI.
- Android has some.
- iOS and others had nothing.

## 2. Project Build Chains

- Once upon a time, there was a small shop called Nitobi.
- They loved building apps for people.
- They hated building apps for platforms.
- They hated repetition.
- For each app build, so was a custom build chain:
    - Rake: was the first
    - Make: a bash revolution.
    - Jake: a node swarm.

## 3. Ruby Gem

- One gem to rule them and in the darkness bind them
- Strategy:
    - CLI was responsible to compile and deploy on each platform
- Battle:
    - lost before it began.
- Council Report:
    - difficult to hit a moving target.
    - platform code changes.
    - sdk requirements change.

## 4. Cordova

- Different Cordova...
- Street-wise and hardened from past failures.
- Bash revolution.
- Build chain added to each project.
    - helped to reduce version incompatibilities with cli
    - a little...
    - had to be on a specific PhoneGap version
    - still suseptible to SDK changes
- Community got behind this one.
- Still failed.

## 5. Platform bin

- Humbled by past defeats.
- Put reponsibility on the lords of the land.
    - think of a public API
- Fixed PhoneGap version incompatibilities (strengthed the realm)
- Reduce SDK incompatibilities (fudeal ties)
- Put the responsibility on the platforms

## 6. Cordova CLI

- The kingdom
- Offer a clean interface to access each platform bin/ 
- Offer a clean way to jump between versions
- Still doesn't solve SDKs 100%
    - Adding validation to offer guidance

### Usage

#### npm install -g cordova
#### npm link cordova
#### install SDKs and ios-sim
#### cordova [--help]
#### cordova create <path>
#### cordova platform add <platform>
#### cordova build <platform>
#### cordova emulate <platform>

### The road ahead

## 7. PhoneGap Build CLI

- Do the same for building remotely

## 8. PhoneGap CLI

- Integrate the two

## Get involved

### github for the code
### apache cordova for the discussion

## Thanks


