import React, { FC } from 'react';
import { Typography } from 'antd';

type Props = {
  component: React.ReactNode;
};
const App: FC<Props> = () => {
  const { Text } = Typography;
  return (
    <div className="App h-screen w-screen text-white">
      <p className="text-white bg-yellow-200">Ottawa-Gatinau, 24-25 november 2023</p>
    </div>
  );
};

export default App;
