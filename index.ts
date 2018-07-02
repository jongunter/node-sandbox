import * as tf from '@tensorflow/tfjs';

// const initialValues = tf.zeros([5]);
// const biases = tf.variable(initialValues);
// biases.print();

// const updatedValues = tf.tensor1d([0, 1, 0, 1, 0]);
// biases.assign(updatedValues);
// biases.print();

const d = tf.tensor2d([[1.0, 2.0], [3.0, 4.0]]);
const d_squared = d.square();
d_squared.print();

const e = tf.tensor2d([
    [1.0, 2.0],
    [3.0, 4.0]
]);
const f = tf.tensor2d([
    [5.0, 6.0],
    [7.0, 8.0]
]);
const e_plus_f = e.add(f);
e_plus_f.print();

const sq_sum = e.add(f).square();
sq_sum.print();