import React from 'react';
import {useDispatch} from 'react-redux';
import {fetchHomeData} from '../../stores/features/home/HomeSlice';

import ForLoggedUser from './ForLoggedUser';
import ForNonLoggedUser from './ForNonLoggedUser';

const isUserLoggedIn = true;
export default function Index() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);

  return isUserLoggedIn ? <ForLoggedUser /> : <ForNonLoggedUser />;
}
