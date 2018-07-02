import * as tf from '@tensorflow/tfjs';

const shape = [2, 3];
const a = tf.tensor([1.0, 2.0, 3.0, 10.0, 20.0, 30.0], shape);
a.print();

const b = tf.tensor([[1.0, 2.0, 3.0], [10.0, 20.0, 30.0]]);
b.print();

const c = tf.tensor2d([
    [1.0, 2.0, 3.0],
    [10.0, 20.0, 30.0]
]);
c.print();

const zeros = tf.zeros([3, 5]);
zeros.print();