import { db } from "@config/firebase";
import IsAuth from "@feature/auth/IsAuth";
import dynamic from "next/dynamic";

const EditorPage = dynamic(() => import("@feature/document/editor/EditorPage"), {
  ssr: false,
  loading: () => <div className="p-6 text-gray-600">Loading editor...</div>,
});
import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useDocumentOnce } from "react-firebase-hooks/firestore";

interface DocProps {}

const Doc: React.FC<DocProps> = () => {
  const session = useSession();

  const router = useRouter();
  const { id } = router.query;

  const [snapshot, loading] = useDocumentOnce(
    db
      .collection("userDocs")
      .doc(session?.data?.user?.email as string)
      .collection("docs")
      .doc(id as string)
  );

  if (!loading && !snapshot?.data()?.filename) {
    router.replace("/");
  }

  return (
    <IsAuth>
      <Head>
        <title>{snapshot?.data()?.filename}</title>
      </Head>
      <EditorPage snapshot={snapshot} />
    </IsAuth>
  );
};

export default Doc;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
