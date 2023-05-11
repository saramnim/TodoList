import React from 'react';
import { TodoTemplateBlock } from './style';

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
