import * as tf from '@tensorflow/tfjs';

const LEARNING_RATE = 100;

const model = tf.sequential();
const layer = tf.layers.simpleRNN({
    units: 20, 
    recurrentInitializer: 'GlorotNormal',
    inputShape: [80, 4]
});
model.add(layer);

const optimizer = tf.train.sgd(LEARNING_RATE);
