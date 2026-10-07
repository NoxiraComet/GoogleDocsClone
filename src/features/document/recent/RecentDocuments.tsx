import { DOCUMENT_DATE_FORMAT, FIRESTORE_COLLECTIONS } from "@config/constants";
import { db } from "@config/firebase";
import moment from "moment";
import { useSession } from "next-auth/react";
import { useCollectionOnce } from "react-firebase-hooks/firestore";
import RecentDocument from "./RecentDocument";

const RecentDocuments: React.FC = () => {
  const session = useSession();
  const [snapshot] = useCollectionOnce(
    db
      .collection(FIRESTORE_COLLECTIONS.userDocuments)
      .doc(session?.data?.user?.email as string)
      .collection(FIRESTORE_COLLECTIONS.documents)
      .orderBy("timestamp", "desc")
  );

  return (
    <>
      {snapshot?.docs.map((doc) => (
        <RecentDocument
          key={doc.id}
          id={doc.id}
          filename={doc.data().filename as string}
          date={moment(doc.data().timestamp.toDate()).format(DOCUMENT_DATE_FORMAT)}
        />
      ))}
    </>
  );
};

export default RecentDocuments;
