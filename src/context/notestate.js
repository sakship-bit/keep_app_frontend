import NoteContext from "./notecontext";
import { useState } from "react";

const NoteState = (props) => {
  const collectioninitial = [
    {
      _id: { $oid: "63996b361b4d279cd4111d01" },
      user: { $oid: "63917292e0dd35cd89806779" },
      notes: [
        {
          title: "my tit",
          description: "this is a description",
          tag: "personal",
        },
        {
          title: "my tit",
          description: "this is a description 2",
          tag: "personal",
        },
        {
          title: "my tit",
          description: "this is a description 3",
          tag: "personal",
        },
      ],
      collection: "collection 1",
      date: { $date: { $numberLong: "1670510068854" } },
      __v: { $numberInt: "0" },
    },
    {
        _id: { $oid: "63996b361b4d279cd4111d01" },
        user: { $oid: "63917292e0dd35cd89806779" },
        notes: [
          {
            title: "my tit",
            description: "this is a description",
            tag: "personal",
          },
          {
            title: "my tit",
            description: "this is a description 2",
            tag: "personal",
          },
          {
            title: "my tit",
            description: "this is a description 3",
            tag: "personal",
          },
        ],
        collection: "collection 1",
        date: { $date: { $numberLong: "1670510068854" } },
        __v: { $numberInt: "0" },
      },
  ];

  const [collectionData, setCollection] = useState(collectioninitial);
  return (
    <NoteContext.Provider value={{ collectionData, setCollection }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
