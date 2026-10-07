import { APP_STRINGS } from "@config/constants";
import Image from "next/image";
import { useState } from "react";
import CreateDocument from "./CreateDocument";

const BlankDocument: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <CreateDocument showModal={showModal} close={() => setShowModal(false)} />
      <div
        className="relative h-52 w-40 border-2 cursor-pointer
            hover:border-blue-700 transform duration-200 transition-colors
            ease-in-out"
        onClick={() => setShowModal(!showModal)}
      >
        <Image src="/images/docs-blank.png" layout="fill" alt="blank" />
      </div>
      <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">{APP_STRINGS.blankDocumentTitle}</p>
    </>
  );
};

export default BlankDocument;
