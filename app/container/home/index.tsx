import React from 'react';

import ForLoggedUser from './ForLoggedUser';
import ForNonLoggedUser from './ForNonLoggedUser';

const isUserLoggedIn = true;
export default function Index() {
  return isUserLoggedIn ? <ForLoggedUser /> : <ForNonLoggedUser />;
}
