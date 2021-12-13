import React, { useEffect, useState } from 'react';
import { useSelector, useActions } from '../hooks';
import Loader from 'react-loader-spinner';
import { TableData } from '../state/reducers/stringReducer';

const TableItem: React.FC = () => {
  const { fetchStrings } = useActions();
  const { data, error, loading } = useSelector((state) => state.trivial);
  const [fetchedData, setFetchedData] = useState<TableData[]>([]);

  useEffect(() => {
    if (data.length > fetchedData.length) {
      setFetchedData(data);
    }
  }, [data.length]);

  useEffect(() => {
    const interval = setInterval(fetchStrings, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (loading && !fetchedData.length) {
    return (
      <div className='text-center'>
        <Loader type='ThreeDots' color='#00BFFF' height={20} width={20} />
      </div>
    );
  }

  return (
    <div className='col-10 offset-md-1'>
      {!error ? (
        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>From Address</th>
              <th scope='col'>String</th>
              <th scope='col'>Created Date</th>
            </tr>
          </thead>
          {fetchedData.length
            ? fetchedData.map((item) => {
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
