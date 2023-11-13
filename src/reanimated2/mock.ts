/* eslint-disable node/no-callback-literal */
'use strict';

import type { WithSpringConfig, WithTimingConfig } from './animation';
import type { DecayConfig } from './animation/decay/utils';
import type { AnimatableValue, AnimationCallback } from './commonTypes';
import { ReduceMotion, SensorType } from './commonTypes';

const NOOP = () => {
  // noop
};
const NOOP_FACTORY = () => NOOP;
const ID = <T>(t: T) => t;
const IMMEDIATE_CALLBACK_INVOCATION = <T>(callback: () => T) => callback();

class BaseAnimationMock {
  duration() {
    return this;
  }

  delay() {
    return this;
  }

  springify() {
    return this;
  }

  damping() {
    return this;
  }

  stiffness() {
    return this;
  }

  withCallback() {
    return this;
  }

  randomDelay() {
    return this;
  }

  withInitialValues() {
    return this;
  }

  build() {
    return () => ({ initialValues: {}, animations: {} });
  }

  reduceMotion() {
    return this;
  }
}

const ReanimatedV2 = {
  useSharedValue: <Value>(init: Value) => ({ value: init }),
  useDerivedValue: <Value>(processor: () => Value) => ({ value: processor() }),
  useAnimatedScrollHandler: NOOP_FACTORY,
  useAnimatedGestureHandler: NOOP_FACTORY,
  useAnimatedStyle: IMMEDIATE_CALLBACK_INVOCATION,
  useAnimatedProps: IMMEDIATE_CALLBACK_INVOCATION,
  useAnimatedRef: () => ({ current: null }),
  useAnimatedReaction: NOOP,
  ReduceMotion: ReduceMotion,
  SensorType: SensorType,
  useAnimatedSensor: () => ({
    sensor: {
      value: {
        x: 0,
        y: 0,
        z: 0,
        interfaceOrientation: 0,
        qw: 0,
        qx: 0,
        qy: 0,
        qz: 0,
        yaw: 0,
        pitch: 0,
        roll: 0,
      },
    },
    unregister: NOOP,
    isAvailable: false,
    config: {
      interval: 0,
      adjustToInterfaceOrientation: false,
      iosReferenceFrame: 0,
    },
  }),

  withTiming: (
    toValue: AnimatableValue,
    _userConfig?: WithTimingConfig,
    callback?: AnimationCallback
  ) => {
    callback?.(true);
    return toValue;
  },
  withSpring: (
    toValue: AnimatableValue,
    _userConfig?: WithSpringConfig,
    callback?: AnimationCallback
  ) => {
    callback?.(true);
    return toValue;
  },
  withDecay: (_userConfig: DecayConfig, callback?: AnimationCallback) => {
    callback?.(true);
    return 0;
  },
  withDelay: <T>(_delayMs: number, nextAnimation: T) => {
    return nextAnimation;
  },
  withSequence: () => 0,
  withRepeat: ID,
  cancelAnimation: NOOP,
  measure: () => ({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    pageX: 0,
    pageY: 0,
  }),
  Easing: {
    linear: ID,
    ease: ID,
    quad: ID,
    cubic: ID,
    poly: ID,
    sin: ID,
    circle: ID,
    exp: ID,
    elastic: ID,
    back: ID,
    bounce: ID,
    bezier: () => ({ factory: ID }),
    bezierFn: ID,
    steps: ID,
    in: ID,
    out: ID,
    inOut: ID,
  },
  Extrapolation: {
    EXTEND: 'extend',
    CLAMP: 'clamp',
    IDENTITY: 'identity',
  },
  runOnJS: ID,
  runOnUI: ID,
};

[
  'FadeIn',
  'FadeInRight',
  'FadeInLeft',
  'FadeInUp',
  'FadeInDown',
  'FadeOut',
  'FadeOutRight',
  'FadeOutLeft',
  'FadeOutUp',
  'FadeOutDown',

  'FlipInYLeft',
  'FlipInXDown',
  'FlipInYRight',
  'FlipInEasyX',
  'FlipInEasyY',
  'FlipOutXUp',
  'FlipOutYLeft',
  'FlipOutXDown',
  'FlipOutYRight',
  'FlipOutEasyX',
  'FlipOutEasyY',

  'StretchInY',
  'StretchOutX',
  'StretchOutY',
  'SlideInLeft',
  'SlideOutRight',
  'SlideOutLeft',
  'SlideInUp',
  'SlideInDown',
  'SlideOutUp',

  'ZoomInRotate',
  'ZoomInLeft',
  'ZoomInRight',
  'ZoomInUp',
  'ZoomInDown',
  'ZoomInEasyUp',
  'ZoomInEasyDown',
  'ZoomOut',
  'ZoomOutRotate',
  'ZoomOutLeft',
  'ZoomOutRight',
  'ZoomOutUp',
  'ZoomOutDown',
  'ZoomOutEasyUp',
  'ZoomOutEasyDown',

  'BounceIn',
  'BounceInDown',
  'BounceInUp',
  'BounceInLeft',
  'BounceInRight',
  'BounceOut',
  'BounceOutDown',
  'BounceOutUp',
  'BounceOutLeft',
  'BounceOutRight',

  'LightSpeedInLeft',
  'LightSpeedOutRight',
  'LightSpeedOutLeft',

  'PinwheelOut',

  'RotateInDownRight',
  'RotateInUpLeft',
  'RotateInUpRight',
  'RotateOutDownLeft',
  'RotateOutDownRight',
  'RotateOutUpLeft',
  'RotateOutUpRight',

  'RollInRight',
  'RollOutLeft',
  'RollOutRight',

  'Layout',
  'CurvedTransition',
  'JumpingTransition',
  'SequencedTransition',
  'FadingTransition',
  'EntryExitTransition',
].forEach((k) =>
  Object.assign(ReanimatedV2, {
    [k]: new BaseAnimationMock(),
  })
);

module.exports = {
  ...ReanimatedV2,
};
