#!/bin/sh
#!/usr/bin/env sh

git add .

echo "Enter commit message: "
read commit_message

git commit -m "$commit_message"

npm run build

npm version patch
npm publish --access=public

echo "Done"