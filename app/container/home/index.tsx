import React from 'react';

import ForLoggedUser from './ForLoggedUser';
import ForNonLoggedUser from './ForNonLoggedUser';

const isUserLoggedIn = false;
export default function Index() {
  return isUserLoggedIn ? <ForLoggedUser /> : <ForNonLoggedUser />;
}
