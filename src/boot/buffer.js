// src/boot/buffer.js
import { Buffer } from 'buffer';

export default async () => {
    window.Buffer = Buffer;
};
