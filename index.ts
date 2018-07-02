import * as tf from '@tensorflow/tfjs';

const a = tf.scalar(2);
const b = tf.scalar(4);
const c = tf.scalar(8);

function predict (input: number): tf.Tensor {
    return tf.tidy(() => {
        const x = tf.scalar(input);

        const ax2 = a.mul(x.square());
        const bx = b.mul(x);
        const y = ax2.add(bx).add(c);

        return y;
    });
}

function predictSoemthingElse(input: number): tf.Tensor {
    return tf.tidy(() => {
        const ten = tf.scalar(10);
        return tf.scalar(input).mul(ten);
    });
}

const result = predict(2);
result.print();

const result2 = predict(4);
result2.print();

const result3 = predictSoemthingElse(5);
result3.print();
