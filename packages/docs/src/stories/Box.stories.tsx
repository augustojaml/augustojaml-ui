import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@augustojaml-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando o elemento box</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta

export const Primary: StoryObj<BoxProps> = {
  args: {},
}
