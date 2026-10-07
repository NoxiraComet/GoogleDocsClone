import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const IsAuth: React.FC = ({ children }) => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.replace("/login");
    }
  }, [session, router]);

  return <>{children}</>;
};

export default IsAuth;
