ng build -prod
cp 404.html dist/404.html
mv dist /tmp/dist
git stash
git checkout gh-pages
mv /tmp/dist/* .
rm -r /tmp/dist
git add .
git commit -am "add build"
git push origin gh-pages
git checkout -
rm {inline,vendor,main,polyfills,styles,favicon,index}*
git stash pop
