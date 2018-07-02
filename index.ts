import * as tf from '@tensorflow/tfjs';

const initialValues = tf.zeros([5]);
const biases = tf.variable(initialValues);
biases.print();

const updatedValues = tf.tensor1d([0, 1, 0, 1, 0]);
biases.assign(updatedValues);
biases.print();