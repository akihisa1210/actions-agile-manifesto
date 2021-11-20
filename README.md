# Posting Agile Manifesto Action

A GitHub Action to post a passage from "Manifesto for Agile Software Development" (or other document) in the comments of a pull request.

## Inputs

### `lang`

Language used for comment. Default: "en"  
Supported languages: "en", "ja"

### `repo-token`

**required** Token for posting comment.

## Outputs

### `passage`

Posted passage.

## Example usage

```yaml
uses: akihisa1210/actions-agile-manifesto@v1.1
with:
  lang: en
  repo-token: ${{ secrets.GITHUB_TOKEN }}
```
