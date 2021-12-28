import { db } from '../../../firebase';

export const fetchUserList = async (search, curMembers) => {
  return db
    .collection('users')
    .where('keywords', 'array-contains', search?.toLowerCase())
    .orderBy('displayName')
    .limit(20)
    .get()
    .then((snapshot) => {
      return snapshot.docs
        .map((doc) => ({
          label: doc.data().displayName,
          value: doc.data().uid,
          photoURL: doc.data().photoURL,
        }))
        .filter((opt) => !curMembers.includes(opt.value));
    });
};
