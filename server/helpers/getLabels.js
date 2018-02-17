const limdu = require('limdu');
const fs = require('fs');
const data = fs.readFileSync('./training.json', 'utf-8');

const getLabels = (str) => {

  var TextClassifier = limdu.classifiers.multilabel.BinaryRelevance.bind(0, {
    binaryClassifierType: limdu.classifiers.Winnow.bind(0, {
      retrain_count: 10
    })
  });

  var WordExtractor = function (input, features) {
    input.split(" ").forEach(function (word) {
      features[word] = 1;
    });
  };

  var intentClassifier = new limdu.classifiers.EnhancedClassifier({
    classifierType: TextClassifier,
    featureExtractor: WordExtractor
  });

  intentClassifier.trainBatch(JSON.parse(data));

  return intentClassifier.classify(str);
}

module.exports = getLabels;