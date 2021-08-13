# formatting-help
 Tools for fixing formatted code that isn't formatted the way you want. Good amount of support for tabs.  
https://gosoccerboy5.github.io/formatting-help/  

## For recreations written in Dart (cause why not):
[trim-whitespace](https://dartpad.dev/eb896fef2a75cf4b1bb182aed65b79ae?null_safety=true)  
[replace-indentation](https://dartpad.dev/5d84d9ad08adbf16afc57b847e443e23?null_safety=true)  
[curly-brackets](https://dartpad.dev/6081062503e8b6154177ff1eb7ab1d21?null_safety=true)  
[tabs-to-spaces](https://dartpad.dev/aec0c9059054c13e64ca4cdc2a587be8?null_safety=true)  
Note that you can view the source at Github Gists, by taking the hash in the url and placing it after `gist.github.com`.  
For example, `https://dartpad.dev/?null_safety=true&id=5d84d9ad08adbf16afc57b847e443e23` => `gist.github.com/5d84d9ad08adbf16afc57b847e443e23`.

## Notes for anyone developing locally
 - I'm using [jeffalo.lived](http://marketplace.visualstudio.com/items?itemname=jeffalo.lived) to start a localhost server. You may need to use this or some other form of localhost
 - I'm using `<script>` tags that point to `https://gosoccerboy5.github.io/resources/index.js`. If you want to make a new page, do be sure to use that script, and do be sure to slap a `ref="https://gosoccerboy5.github.io/"`* attribute onto the tag. This makes sure the `<script>` tag knows the right url to reference.

\*The slash at the end of the url is important
