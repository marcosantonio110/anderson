import React, { useState, ReactNode } from "react";

import { ModalFooter } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  contentOne: ReactNode;
  titleOne: string;
  contentTwo?: ReactNode;
  titleTwo?: string;
  titleThree?: string;
  contentThree?: ReactNode;
}

export const CnxModalFooter: React.FC<Props> = ({
  titleOne,
  titleTwo,
  titleThree,
  children,
  contentOne,
  contentTwo,
  contentThree,
  ...shared
}) => {
  const [selected, setSelected] = useState({
    contentOne: true,
    contentTwo: false,
    contentThree: false
  });

  const selectTab = (tab: string) => {
    switch (tab) {
      case "contentOne":
        setSelected({
          contentOne: true,
          contentTwo: false,
          contentThree: false
        });
        break;

      case "contentTwo":
        setSelected({
          contentOne: false,
          contentTwo: true,
          contentThree: false
        });
        break;

      case "contentThree":
        setSelected({
          contentOne: false,
          contentTwo: false,
          contentThree: true
        });
        break;

      default:
    }
  };

  const renderOptions = () => {
    if (selected.contentOne) {
      return <div>{contentOne}</div>;
    } else if (selected.contentTwo) {
      return <div>{contentTwo}</div>;
    } else if (selected.contentThree) {
      return <div>{contentThree}</div>;
    }
  };

  if (titleOne && contentOne) {
    return (
      <ModalFooter {...shared}>
        <ul>
          <li onClick={() => selectTab("contentOne")}>
            <a className={`${selected.contentOne ? "selected" : ""}`}>
              {titleOne}
            </a>
          </li>
          <li onClick={() => selectTab("contentTwo")}>
            <a className={`${selected.contentTwo ? "selected" : ""}`}>
              {titleTwo}
            </a>
          </li>
          <li onClick={() => selectTab("contentThree")}>
            <a className={`${selected.contentThree ? "selected" : ""}`}>
              {titleThree}
            </a>
          </li>
        </ul>
        <div>{renderOptions()}</div>
      </ModalFooter>
    );
  }
  return null;
};

export default CnxModalFooter;
