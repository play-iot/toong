import { PanelProps } from '@grafana/data';
import { stylesFactory } from '@grafana/ui';
import { css, cx } from 'emotion';
import React from 'react';
import ReactFlow from 'react-flow-renderer';
import { SimpleOptions } from 'types';

interface Props extends PanelProps<SimpleOptions> {
}

const elements = [
  {
    id: '1',
    type: 'input', // input node
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },
  // default node
  {
    id: '2',
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'output', // output node
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
  },
  // animated edge
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3' },
];

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const styles = getStyles();
  return (
    <div className={cx(styles.wrapper, css`width: ${width}px; height: ${height}px;`)}>
      <ReactFlow elements={elements}/>
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
});
