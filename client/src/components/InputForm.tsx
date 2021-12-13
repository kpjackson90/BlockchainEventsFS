import React from 'react';
import Loader from 'react-loader-spinner';

interface InputFormChildProps {
  trivialString: string;
  setTrivialString: React.Dispatch<React.SetStateAction<string>>;
  sending: boolean;
  handleSubmitString: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => Promise<void>;
}

const InputForm: React.FC<InputFormChildProps> = ({
  trivialString,
  setTrivialString,
  sending,
  handleSubmitString,
}) => {
  return (
    <React.Fragment>
      <div className='col-6 col-sm-4 offset-md-4'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter Trivial String'
            aria-label='Trivial String'
            aria-describedby='button-addon2'
            value={trivialString}
            onChange={(event) => setTrivialString(event.target.value)}
          />

          <button
            onClick={handleSubmitString}
            className='btn btn-outline-secondary'
            disabled={sending}
            type='button'
            id='button-addon2'
          >
            Send
          </button>
        </div>
        {sending ? (
          <div className='text-center'>
            <p style={{ fontSize: 10, fontWeight: '600', color: '#D3D3D3' }}>
              Sending String
            </p>
            <Loader type='ThreeDots' color='#00BFFF' height={20} width={20} />
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default InputForm;
