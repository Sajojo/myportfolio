import { React } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex justify-center items-center flex-col"
      >
        <svg
          id="signature"
          zoomAndPan="magnify"
          viewBox="0 0 600 149.999998"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
          className="w-[400pt] sm:w-[800pt]"
        >
          <defs>
            <g />
          </defs>
          <g>
            <g transform="translate(55.985798, 104.905201)">
              <g>
                <path d="M 22.3125 0.9375 C 19.375 0.9375 16.546875 0.53125 13.828125 -0.28125 C 11.109375 -1.09375 8.71875 -2.3125 6.65625 -3.9375 C 4.59375 -5.5625 3.0625 -7.625 2.0625 -10.125 C 1.0625 -12.625 0.8125 -15.5625 1.3125 -18.9375 C 1.4375 -19.5 1.6875 -19.984375 2.0625 -20.390625 C 2.4375 -20.796875 2.9375 -21 3.5625 -21 L 8.8125 -21 C 9.5 -21 10.015625 -20.796875 10.359375 -20.390625 C 10.703125 -19.984375 10.84375 -19.46875 10.78125 -18.84375 C 10.34375 -14.65625 11.203125 -11.640625 13.359375 -9.796875 C 15.515625 -7.953125 18.59375 -7.03125 22.59375 -7.03125 C 27.96875 -7.03125 32.15625 -8.59375 35.15625 -11.71875 C 38.15625 -14.84375 40.1875 -19 41.25 -24.1875 L 48.390625 -57.484375 L 15.09375 -57.484375 C 14.46875 -57.484375 14 -57.6875 13.6875 -58.09375 C 13.375 -58.5 13.28125 -59.015625 13.40625 -59.640625 L 14.25 -63.484375 C 14.375 -64.109375 14.671875 -64.625 15.140625 -65.03125 C 15.609375 -65.4375 16.15625 -65.640625 16.78125 -65.640625 L 57.296875 -65.640625 C 57.984375 -65.640625 58.46875 -65.4375 58.75 -65.03125 C 59.03125 -64.625 59.109375 -64.078125 58.984375 -63.390625 L 50.640625 -24 C 49.640625 -18.9375 47.992188 -14.53125 45.703125 -10.78125 C 43.421875 -7.03125 40.375 -4.140625 36.5625 -2.109375 C 32.75 -0.078125 28 0.9375 22.3125 0.9375 Z M 22.3125 0.9375 " />
              </g>
            </g>
          </g>
          <g>
            <g transform="translate(115.052056, 104.905201)">
              <g>
                <path d="M 21.28125 0.9375 C 16.71875 0.9375 12.96875 0.03125 10.03125 -1.78125 C 7.09375 -3.59375 5.046875 -6.109375 3.890625 -9.328125 C 2.734375 -12.546875 2.5 -16.21875 3.1875 -20.34375 C 3.3125 -21.40625 3.5625 -22.765625 3.9375 -24.421875 C 4.3125 -26.078125 4.65625 -27.40625 4.96875 -28.40625 C 5.96875 -32.59375 7.59375 -36.28125 9.84375 -39.46875 C 12.09375 -42.65625 14.96875 -45.15625 18.46875 -46.96875 C 21.96875 -48.789062 26.0625 -49.703125 30.75 -49.703125 C 35.375 -49.703125 39.15625 -48.789062 42.09375 -46.96875 C 45.03125 -45.15625 47.09375 -42.65625 48.28125 -39.46875 C 49.476562 -36.28125 49.703125 -32.59375 48.953125 -28.40625 C 48.765625 -27.40625 48.5 -26.078125 48.15625 -24.421875 C 47.8125 -22.765625 47.515625 -21.40625 47.265625 -20.34375 C 46.191406 -16.21875 44.546875 -12.546875 42.328125 -9.328125 C 40.109375 -6.109375 37.25 -3.59375 33.75 -1.78125 C 30.25 0.03125 26.09375 0.9375 21.28125 0.9375 Z M 21.65625 -6.28125 C 25.59375 -6.28125 29.0625 -7.515625 32.0625 -9.984375 C 35.0625 -12.453125 37.15625 -16.0625 38.34375 -20.8125 C 38.59375 -21.75 38.875 -22.9375 39.1875 -24.375 C 39.5 -25.8125 39.75 -27 39.9375 -27.9375 C 40.75 -32.6875 40.34375 -36.296875 38.71875 -38.765625 C 37.09375 -41.234375 34.3125 -42.46875 30.375 -42.46875 C 26.5 -42.46875 23.0625 -41.234375 20.0625 -38.765625 C 17.0625 -36.296875 14.96875 -32.6875 13.78125 -27.9375 C 13.53125 -27 13.25 -25.8125 12.9375 -24.375 C 12.625 -22.9375 12.40625 -21.75 12.28125 -20.8125 C 11.46875 -16.0625 11.84375 -12.453125 13.40625 -9.984375 C 14.96875 -7.515625 17.71875 -6.28125 21.65625 -6.28125 Z M 21.65625 -6.28125 " />
              </g>
            </g>
          </g>
          <g>
            <g transform="translate(168.68049, 104.905201)">
              <g>
                <path d="M 17.71875 0 C 16.78125 0 16.125 -0.21875 15.75 -0.65625 C 15.375 -1.09375 15.125 -1.65625 15 -2.34375 L 6.84375 -46.40625 C 6.71875 -47.226562 6.859375 -47.828125 7.265625 -48.203125 C 7.671875 -48.578125 8.1875 -48.765625 8.8125 -48.765625 L 13.03125 -48.765625 C 13.71875 -48.765625 14.25 -48.609375 14.625 -48.296875 C 15 -47.984375 15.21875 -47.453125 15.28125 -46.703125 L 21.65625 -10.21875 L 43.78125 -47.171875 C 43.96875 -47.484375 44.28125 -47.828125 44.71875 -48.203125 C 45.15625 -48.578125 45.71875 -48.765625 46.40625 -48.765625 L 51.390625 -48.765625 C 52.015625 -48.765625 52.484375 -48.484375 52.796875 -47.921875 C 53.109375 -47.359375 53.015625 -46.664062 52.515625 -45.84375 L 25.875 -2.34375 C 25.4375 -1.65625 24.953125 -1.09375 24.421875 -0.65625 C 23.890625 -0.21875 23.15625 0 22.21875 0 Z M 17.71875 0 " />
              </g>
            </g>
          </g>
          <g>
            <g transform="translate(220.433781, 104.905201)">
              <g>
                <path d="M 3.28125 0 C 2.65625 0 2.171875 -0.203125 1.828125 -0.609375 C 1.484375 -1.015625 1.375 -1.53125 1.5 -2.15625 L 10.96875 -46.609375 C 11.09375 -47.234375 11.40625 -47.75 11.90625 -48.15625 C 12.40625 -48.5625 12.96875 -48.765625 13.59375 -48.765625 L 18.09375 -48.765625 C 18.71875 -48.765625 19.171875 -48.5625 19.453125 -48.15625 C 19.734375 -47.75 19.8125 -47.234375 19.6875 -46.609375 L 10.3125 -2.15625 C 10.1875 -1.53125 9.890625 -1.015625 9.421875 -0.609375 C 8.953125 -0.203125 8.40625 0 7.78125 0 Z M 14.8125 -57.859375 C 14.1875 -57.859375 13.71875 -58.0625 13.40625 -58.46875 C 13.09375 -58.875 12.96875 -59.390625 13.03125 -60.015625 L 14.25 -65.078125 C 14.375 -65.703125 14.671875 -66.234375 15.140625 -66.671875 C 15.609375 -67.109375 16.15625 -67.328125 16.78125 -67.328125 L 22.59375 -67.328125 C 23.28125 -67.328125 23.796875 -67.109375 24.140625 -66.671875 C 24.484375 -66.234375 24.59375 -65.703125 24.46875 -65.078125 L 23.34375 -60.015625 C 23.21875 -59.390625 22.90625 -58.875 22.40625 -58.46875 C 21.90625 -58.0625 21.34375 -57.859375 20.71875 -57.859375 Z M 14.8125 -57.859375 " />
              </g>
            </g>
          </g>
          <g>
            <g transform="translate(243.216489, 104.905201)">
              <g>
                <path d="M 19.03125 0.9375 C 15.59375 0.9375 12.75 0.328125 10.5 -0.890625 C 8.25 -2.109375 6.53125 -3.765625 5.34375 -5.859375 C 4.15625 -7.953125 3.421875 -10.34375 3.140625 -13.03125 C 2.859375 -15.71875 2.9375 -18.5625 3.375 -21.5625 C 3.5625 -22.5625 3.75 -23.5 3.9375 -24.375 C 4.125 -25.25 4.34375 -26.1875 4.59375 -27.1875 C 5.34375 -30.125 6.34375 -32.921875 7.59375 -35.578125 C 8.84375 -38.234375 10.421875 -40.640625 12.328125 -42.796875 C 14.234375 -44.953125 16.546875 -46.640625 19.265625 -47.859375 C 21.984375 -49.085938 25.15625 -49.703125 28.78125 -49.703125 C 32.78125 -49.703125 35.796875 -49.023438 37.828125 -47.671875 C 39.859375 -46.328125 41.4375 -44.6875 42.5625 -42.75 L 43.3125 -46.609375 C 43.4375 -47.234375 43.734375 -47.75 44.203125 -48.15625 C 44.671875 -48.5625 45.25 -48.765625 45.9375 -48.765625 L 50.171875 -48.765625 C 50.796875 -48.765625 51.28125 -48.5625 51.625 -48.15625 C 51.96875 -47.75 52.078125 -47.234375 51.953125 -46.609375 L 42.46875 -2.15625 C 42.34375 -1.53125 42.046875 -1.015625 41.578125 -0.609375 C 41.109375 -0.203125 40.5625 0 39.9375 0 L 35.625 0 C 35 0 34.53125 -0.203125 34.21875 -0.609375 C 33.90625 -1.015625 33.8125 -1.53125 33.9375 -2.15625 L 34.78125 -6.09375 C 32.84375 -4.09375 30.734375 -2.421875 28.453125 -1.078125 C 26.171875 0.265625 23.03125 0.9375 19.03125 0.9375 Z M 21 -6.65625 C 24.125 -6.65625 26.828125 -7.375 29.109375 -8.8125 C 31.390625 -10.25 33.25 -12.078125 34.6875 -14.296875 C 36.125 -16.515625 37.125 -18.78125 37.6875 -21.09375 C 37.9375 -22.09375 38.203125 -23.296875 38.484375 -24.703125 C 38.765625 -26.109375 39 -27.3125 39.1875 -28.3125 C 39.6875 -30.5 39.734375 -32.65625 39.328125 -34.78125 C 38.921875 -36.90625 37.953125 -38.65625 36.421875 -40.03125 C 34.890625 -41.40625 32.59375 -42.09375 29.53125 -42.09375 C 26.59375 -42.09375 24.078125 -41.390625 21.984375 -39.984375 C 19.890625 -38.578125 18.171875 -36.734375 16.828125 -34.453125 C 15.484375 -32.171875 14.40625 -29.71875 13.59375 -27.09375 C 13.34375 -26.15625 13.125 -25.25 12.9375 -24.375 C 12.75 -23.5 12.59375 -22.59375 12.46875 -21.65625 C 12.09375 -19.03125 12 -16.578125 12.1875 -14.296875 C 12.375 -12.015625 13.15625 -10.171875 14.53125 -8.765625 C 15.90625 -7.359375 18.0625 -6.65625 21 -6.65625 Z M 21 -6.65625 " />
              </g>
            </g>
          </g>
          <g>
            <g transform="translate(298.157505, 104.905201)">
              <g>
                <path d="M 3.28125 0 C 2.65625 0 2.171875 -0.203125 1.828125 -0.609375 C 1.484375 -1.015625 1.375 -1.53125 1.5 -2.15625 L 10.96875 -46.609375 C 11.09375 -47.234375 11.40625 -47.75 11.90625 -48.15625 C 12.40625 -48.5625 12.96875 -48.765625 13.59375 -48.765625 L 18 -48.765625 C 18.625 -48.765625 19.09375 -48.5625 19.40625 -48.15625 C 19.71875 -47.75 19.8125 -47.234375 19.6875 -46.609375 L 18.75 -42.46875 C 20.6875 -44.59375 23.03125 -46.328125 25.78125 -47.671875 C 28.53125 -49.023438 31.65625 -49.703125 35.15625 -49.703125 C 39.65625 -49.703125 43.1875 -48.804688 45.75 -47.015625 C 48.320312 -45.234375 49.984375 -42.765625 50.734375 -39.609375 C 51.484375 -36.453125 51.421875 -32.78125 50.546875 -28.59375 L 44.8125 -2.15625 C 44.6875 -1.53125 44.390625 -1.015625 43.921875 -0.609375 C 43.453125 -0.203125 42.90625 0 42.28125 0 L 37.59375 0 C 36.96875 0 36.484375 -0.203125 36.140625 -0.609375 C 35.796875 -1.015625 35.6875 -1.53125 35.8125 -2.15625 L 41.34375 -28.125 C 42.34375 -32.75 42.296875 -36.234375 41.203125 -38.578125 C 40.109375 -40.921875 37.34375 -42.09375 32.90625 -42.09375 C 28.59375 -42.09375 24.921875 -40.859375 21.890625 -38.390625 C 18.859375 -35.921875 16.875 -32.5 15.9375 -28.125 L 10.5 -2.15625 C 10.375 -1.53125 10.078125 -1.015625 9.609375 -0.609375 C 9.140625 -0.203125 8.59375 0 7.96875 0 Z M 3.28125 0 " />
              </g>
            </g>
          </g>
          <g>
            <g transform="translate(354.973636, 104.905201)">
              <g />
            </g>
          </g>
          <g>
            <g transform="translate(378.412636, 104.905201)">
              <g>
                <path d="M 18.5625 0 C 17.875 0 17.375 -0.203125 17.0625 -0.609375 C 16.75 -1.015625 16.65625 -1.53125 16.78125 -2.15625 L 28.5 -57.296875 L 10.5 -57.296875 C 9.875 -57.296875 9.40625 -57.5 9.09375 -57.90625 C 8.78125 -58.3125 8.6875 -58.828125 8.8125 -59.453125 L 9.65625 -63.390625 C 9.78125 -64.078125 10.078125 -64.625 10.546875 -65.03125 C 11.015625 -65.4375 11.59375 -65.640625 12.28125 -65.640625 L 57.484375 -65.640625 C 58.171875 -65.640625 58.65625 -65.4375 58.9375 -65.03125 C 59.21875 -64.625 59.296875 -64.078125 59.171875 -63.390625 L 58.328125 -59.453125 C 58.203125 -58.828125 57.90625 -58.3125 57.4375 -57.90625 C 56.96875 -57.5 56.390625 -57.296875 55.703125 -57.296875 L 37.78125 -57.296875 L 26.0625 -2.15625 C 25.9375 -1.53125 25.640625 -1.015625 25.171875 -0.609375 C 24.703125 -0.203125 24.125 0 23.4375 0 Z M 18.5625 0 " />
              </g>
            </g>
          </g>
          <g>
            <g transform="translate(432.22856, 104.905201)">
              <g>
                <path d="M 19.03125 0.9375 C 15.59375 0.9375 12.75 0.328125 10.5 -0.890625 C 8.25 -2.109375 6.53125 -3.765625 5.34375 -5.859375 C 4.15625 -7.953125 3.421875 -10.34375 3.140625 -13.03125 C 2.859375 -15.71875 2.9375 -18.5625 3.375 -21.5625 C 3.5625 -22.5625 3.75 -23.5 3.9375 -24.375 C 4.125 -25.25 4.34375 -26.1875 4.59375 -27.1875 C 5.34375 -30.125 6.34375 -32.921875 7.59375 -35.578125 C 8.84375 -38.234375 10.421875 -40.640625 12.328125 -42.796875 C 14.234375 -44.953125 16.546875 -46.640625 19.265625 -47.859375 C 21.984375 -49.085938 25.15625 -49.703125 28.78125 -49.703125 C 32.78125 -49.703125 35.796875 -49.023438 37.828125 -47.671875 C 39.859375 -46.328125 41.4375 -44.6875 42.5625 -42.75 L 43.3125 -46.609375 C 43.4375 -47.234375 43.734375 -47.75 44.203125 -48.15625 C 44.671875 -48.5625 45.25 -48.765625 45.9375 -48.765625 L 50.171875 -48.765625 C 50.796875 -48.765625 51.28125 -48.5625 51.625 -48.15625 C 51.96875 -47.75 52.078125 -47.234375 51.953125 -46.609375 L 42.46875 -2.15625 C 42.34375 -1.53125 42.046875 -1.015625 41.578125 -0.609375 C 41.109375 -0.203125 40.5625 0 39.9375 0 L 35.625 0 C 35 0 34.53125 -0.203125 34.21875 -0.609375 C 33.90625 -1.015625 33.8125 -1.53125 33.9375 -2.15625 L 34.78125 -6.09375 C 32.84375 -4.09375 30.734375 -2.421875 28.453125 -1.078125 C 26.171875 0.265625 23.03125 0.9375 19.03125 0.9375 Z M 21 -6.65625 C 24.125 -6.65625 26.828125 -7.375 29.109375 -8.8125 C 31.390625 -10.25 33.25 -12.078125 34.6875 -14.296875 C 36.125 -16.515625 37.125 -18.78125 37.6875 -21.09375 C 37.9375 -22.09375 38.203125 -23.296875 38.484375 -24.703125 C 38.765625 -26.109375 39 -27.3125 39.1875 -28.3125 C 39.6875 -30.5 39.734375 -32.65625 39.328125 -34.78125 C 38.921875 -36.90625 37.953125 -38.65625 36.421875 -40.03125 C 34.890625 -41.40625 32.59375 -42.09375 29.53125 -42.09375 C 26.59375 -42.09375 24.078125 -41.390625 21.984375 -39.984375 C 19.890625 -38.578125 18.171875 -36.734375 16.828125 -34.453125 C 15.484375 -32.171875 14.40625 -29.71875 13.59375 -27.09375 C 13.34375 -26.15625 13.125 -25.25 12.9375 -24.375 C 12.75 -23.5 12.59375 -22.59375 12.46875 -21.65625 C 12.09375 -19.03125 12 -16.578125 12.1875 -14.296875 C 12.375 -12.015625 13.15625 -10.171875 14.53125 -8.765625 C 15.90625 -7.359375 18.0625 -6.65625 21 -6.65625 Z M 21 -6.65625 " />
              </g>
            </g>
          </g>
          <g>
            <g transform="translate(487.169577, 104.905201)">
              <g>
                <path d="M 3.28125 0 C 2.65625 0 2.171875 -0.203125 1.828125 -0.609375 C 1.484375 -1.015625 1.375 -1.53125 1.5 -2.15625 L 10.96875 -46.609375 C 11.09375 -47.234375 11.40625 -47.75 11.90625 -48.15625 C 12.40625 -48.5625 12.96875 -48.765625 13.59375 -48.765625 L 18 -48.765625 C 18.625 -48.765625 19.09375 -48.5625 19.40625 -48.15625 C 19.71875 -47.75 19.8125 -47.234375 19.6875 -46.609375 L 18.75 -42.46875 C 20.6875 -44.59375 23.03125 -46.328125 25.78125 -47.671875 C 28.53125 -49.023438 31.65625 -49.703125 35.15625 -49.703125 C 39.65625 -49.703125 43.1875 -48.804688 45.75 -47.015625 C 48.320312 -45.234375 49.984375 -42.765625 50.734375 -39.609375 C 51.484375 -36.453125 51.421875 -32.78125 50.546875 -28.59375 L 44.8125 -2.15625 C 44.6875 -1.53125 44.390625 -1.015625 43.921875 -0.609375 C 43.453125 -0.203125 42.90625 0 42.28125 0 L 37.59375 0 C 36.96875 0 36.484375 -0.203125 36.140625 -0.609375 C 35.796875 -1.015625 35.6875 -1.53125 35.8125 -2.15625 L 41.34375 -28.125 C 42.34375 -32.75 42.296875 -36.234375 41.203125 -38.578125 C 40.109375 -40.921875 37.34375 -42.09375 32.90625 -42.09375 C 28.59375 -42.09375 24.921875 -40.859375 21.890625 -38.390625 C 18.859375 -35.921875 16.875 -32.5 15.9375 -28.125 L 10.5 -2.15625 C 10.375 -1.53125 10.078125 -1.015625 9.609375 -0.609375 C 9.140625 -0.203125 8.59375 0 7.96875 0 Z M 3.28125 0 " />
              </g>
            </g>
          </g>
        </svg>
        <div className="pt-5 flex flex-col items-center text-2xl sm:text-3xl md:text-4xl text-[#FFF8F0]">
          <a
            href="#work"
            className="hover:scale-102 hover:text-[#FFCF99] duration-200 text-center"
          >
            <div className="flex p-4 sm:p-6 " id="choice">
              <span id="hid">&gt;</span>
              <strong className="text-[#FFCF99]">This&nbsp;</strong> is my work
              <span id="hid">&lt;</span>
            </div>
          </a>
          <a
            href="#about"
            className="hover:scale-102 hover:text-[#FFCF99] duration-200 text-center"
          >
            <div className="flex p-4 sm:p-6 " id="choice">
              <span id="hid">&gt;</span>
              <strong className="text-[#FFCF99]">This&nbsp;</strong>
              is me
              <span id="hid">&lt;</span>
            </div>
          </a>
          <a
            href="#ctc"
            className="hover:scale-102 hover:text-[#FFCF99] duration-200 text-center"
          >
            <div className="flex p-4 sm:p-6 " id="choice">
              <span id="hid">&gt;</span>
              <strong className="text-[#FFCF99]">This&nbsp;</strong>
              is how to find me
              <span id="hid">&lt;</span>
            </div>
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Intro;
