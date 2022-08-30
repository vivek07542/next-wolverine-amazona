// // /api/orders/:id
// import { getSession } from 'next-auth/react';
// import Order from '../../../models/Order';
// import db from '../../../utils/db';

// const handler = async (req, res) => {
//   const session = await getSession({ req });
//   // Request for session
//   if (!session) {
//     return res.status(401).send('signin required');
//   }
//   // If No Session got then user will get 404 error
//   await db.connect();
//   // Now App is connected to MongoDB
//   const order = await Order.findById(req.query.id);
//   // Find that Order from Backend Using /api/order/:id
//   await db.disconnect();
//   // Disconnect with the backend
//   res.send(order);
//   // Send order detail
// };

// export default handler;

// /api/orders/:id
import { getSession } from 'next-auth/react';
import Order from '../../../../models/Order';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send('signin required');
  }

  await db.connect();

  const order = await Order.findById(req.query.id);
  await db.disconnect();
  res.send(order);
};

export default handler;
