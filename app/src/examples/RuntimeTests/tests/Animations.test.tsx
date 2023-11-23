/* eslint-disable no-inline-styles/no-inline-styles */
import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  FadeIn,
} from 'react-native-reanimated';
import {
  describe,
  test,
  expect,
  render,
  useTestRef,
  getTestComponent,
  wait,
  mockAnimationTimer,
  recordAnimationUpdates,
} from '../ReanimatedRuntimeTestsRunner/RuntimeTestsApi';
import { Snapshots } from './snapshots/Animations.snapshot';

const AnimatedComponent = () => {
  const widthSV = useSharedValue(0);
  const ref = useTestRef('AnimatedComponent');

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(widthSV.value, { duration: 500 }),
    };
  });

  useEffect(() => {
    widthSV.value = 100;
  }, [widthSV]);

  return (
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'red' }}>
      <Animated.View
        ref={ref}
        style={[
          { width: 0, height: 80, backgroundColor: 'black', margin: 30 },
          style,
        ]}
      />
    </View>
  );
};

const LayoutAnimation = () => {
  const ref = useTestRef('AnimatedComponent');

  return (
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'red' }}>
      <Animated.View
        ref={ref}
        entering={FadeIn}
        style={{ width: 50, height: 50, backgroundColor: 'black', margin: 30 }}
      />
    </View>
  );
};

describe('Tests of animations', () => {
  test('withTiming - expect error', async () => {
    await render(<AnimatedComponent />);
    const component = getTestComponent('AnimatedComponent');
    await wait(600);
    expect(await component.getAnimatedStyle('width')).toBe('123');
  });

  test('withTiming - expect pass', async () => {
    await render(<AnimatedComponent />);
    const component = getTestComponent('AnimatedComponent');
    await wait(600);
    expect(await component.getAnimatedStyle('width')).toBe('100');
  });

  test('withTiming - match snapshot', async () => {
    await mockAnimationTimer();
    const updates = await recordAnimationUpdates();
    await render(<AnimatedComponent />);
    await wait(600);
    expect(updates.value).toMatchSnapshot(Snapshots.animation3);
  });

  test('layoutAnimation - entering', async () => {
    await mockAnimationTimer();
    const updates = await recordAnimationUpdates();
    await render(<LayoutAnimation />);
    await wait(600);
    expect(updates.value).toMatchSnapshot(Snapshots.layoutAnimation);
  });
});
