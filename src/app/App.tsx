import { CheckboxTree } from '@/shared/ui/CheckboxTree';
import { TREE } from '@/shared/ui/CheckboxTree/model/constants.ts';

import './styles/index.css';

export const App = () => (
  <div className='app'>
    <CheckboxTree data={TREE} />
  </div>
);
