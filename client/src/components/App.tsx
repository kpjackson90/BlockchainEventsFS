import React, { useState } from 'react';
import web3 from '../web3';
import trivial from '../trivial';
import InputForm from './InputForm';
import TableItem from './TableItem';

const App = () => {
  const [trivialString, setTrivialString] = useState('');

  const [sending, setSending] = useState(false);

  const handleSubmitString = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();

    setSending(true);
    await trivial.methods.setString(trivialString).send({
      from: accounts[0],
      gas: '1000000',
    });

    setSending(false);
    setTrivialString('');
  };

  return (
    <div style={{ marginTop: '10%' }}>
      <h1 className='text-center'>Trivial String</h1>
      <InputForm
        trivialString={trivialString}
        setTrivialString={setTrivialString}
        sending={sending}
        handleSubmitString={handleSubmitString}
      />
      <TableItem />
    </div>
  );
};

export default App;
