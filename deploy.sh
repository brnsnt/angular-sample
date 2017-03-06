# build project
npm install
ng build -prod

# add custom 404 for gh-pages hack to buil
cp 404.html dist/404.html

# move build to custom location
mv dist /tmp/dist

# checkout and clear gh-pages branch
git stash
git checkout gh-pages
rm -rf *
rm .*[!git]

# add build
mv /tmp/dist/* .
rm -r /tmp/dist

# commit and push build
git add .
git commit -am "add build"
git push origin gh-pages

# checkout latest branch
git checkout -
git stash pop
