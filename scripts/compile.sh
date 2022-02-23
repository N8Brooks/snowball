# Compiles JavaScript files from the snowball project

if [ -d "snowball" ]
then
  echo "Updating snowball"
  cd snowball
  git pull --rebase
else
  echo "Cloning snowball"
  git clone https://github.com/snowballstem/snowball
  cd snowball
fi

make

for algorithm in algorithms/*; do
  language=$(basename -s ".sbl" $algorithm)
  ./snowball $algorithm -o ../$language -js
done

cp javascript/base-stemmer.js ../base_stemmer.js