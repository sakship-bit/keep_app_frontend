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
          id:"1"
        },
        {
          title: "my tit",
          description: "this is a description 2",
          tag: "personal",
          id:"2"
        },
        {
          title: "my tit",
          description: "this is a description 3",
          tag: "personal",
          id:"3"
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
            id:"4"
          },
          {
            title: "my tit",
            description: "this is a description 2",
            tag: "personal",
            id:"5"
          },
          {
            title: "my tit",
            description: "this is a description 3",
            tag: "personal",
            id:"6"
          },
        ],
        collection: "collection 1",
        date: { $date: { $numberLong: "1670510068854" } },
        __v: { $numberInt: "0" },
      },
  ];

  const [collectionData, setCollection] = useState(collectioninitial);
  

  //add a note
const AddNote=()=>{

}
  //delete a note
const DeleteNote=(e,id,id_note)=>{
  console.log(collectionData[id].notes[e])
  
  //  const newcollection=collectionData[id].notes.filter((note)=>{return note.id!==id_note})
  // setCollection(newcollection);
}

  // edit a note
const EditNote=()=>{

}


  return (
    <NoteContext.Provider value={{ collectionData, setCollection,AddNote,DeleteNote,EditNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
