# Flux Viewport

## API Reference Documentation
https://flux-viewport-reference.herokuapp.com/

## Developers
Make sure you have node version 4+

npm install

python -m SimpleHTTPServer 8001

Different usage examples are available, navigate to the appropriate url.

Basic Demo - Use this see an example of how the viewport can be used in a web page.
http://localhost:8001/demo/basic.html

Advanced Demo - This example shows how to make a page with multiple viewports.
http://localhost:8001/demo/advanced.html

QA - Use this page load the image diffing app.
http://localhost:8001/qa/

### Extended Developer Setup

To setup gerrit for code review run the following commands.
```
# Update remotes
git remote rename origin bitbucket
git remote add gerrit ssh://${USER}@cr.flux.io:29418/flux-viewport

# Add Commit hook
curl https://cr.flux.io/tools/hooks/commit-msg > `git rev-parse --git-dir`/hooks/commit-msg
chmod +x `git rev-parse --git-dir`/hooks/commit-msg
```
If you are working in Flux genie follow the instructions here:
https://docs.google.com/document/d/1qf6PGJN54buSGFcrcRCZnruY4yTAsNRzoMtEpyE2VFY/edit#heading=h.owqmh4p4ruch
