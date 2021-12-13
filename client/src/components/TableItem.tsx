import React, { useEffect } from 'react';
import { useSelector, useActions } from '../hooks';
import Loader from 'react-loader-spinner';

const TableItem: React.FC = () => {
  const { fetchStrings } = useActions();
  const { data, error, loading } = useSelector((state) => state.trivial);

  useEffect(() => {
    fetchStrings();
  }, []);

  if (loading) {
    return (
      <div className='text-center'>
        <Loader type='ThreeDots' color='#00BFFF' height={20} width={20} />
      </div>
    );
  }

  return (
    <div className='col-10 offset-md-1'>
      {!error && !loading ? (
        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>From Address</th>
              <th scope='col'>String</th>
              <th scope='col'>Created Date</th>
            </tr>
          </thead>
          {data.length
            ? data.map((item) => {
                return (
                  <tbody key={item.id}>
                    <tr>
                      <th>{item.id}</th>
                      <th>{item.fromAddress}</th>
                      <th>{item.createdString}</th>
                      <th>{new Date(item.createdAt).toString()}</th>
                    </tr>
                  </tbody>
                );
              })
            : null}
        </table>
      ) : (
        <h3>{error}</h3>
      )}
    </div>
  );
};

export default TableItem;
