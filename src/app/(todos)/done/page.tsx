"use client";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { PiCheckSquareLight, PiTrashLight } from "react-icons/pi";
import Link from "next/link";

interface ActivitiesProps {
  id: string;
  activity: string;
  createdAt: Date;
}

const Done = () => {
  const [activities, setActivities] = useState<ActivitiesProps[]>([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const q = query(collection(db, "done"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    const activitiesList: ActivitiesProps[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as ActivitiesProps[];
    setActivities(activitiesList);
  };

  const handleUndo = async (activity: ActivitiesProps) => {
    try {
      await addDoc(collection(db, "todo"), {
        activity: activity.activity,
        createdAt: new Date(),
      });
      await deleteDoc(doc(db, "done", activity.id));
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      fetchItems();
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "done", id));
    } catch (error) {
      console.error("Error deleting document: ", error);
    } finally {
      fetchItems();
    }
  };

  return (
    <div className="">
      <div className="text-center text-3xl">What has be done</div>

      <div className="grid gap-4 mt-20 mx-auto">
        {activities.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <PiCheckSquareLight size={30} onClick={() => handleUndo(item)} />
            <div className="w-full">
              <div className="py-4 px-4 text-2xl rounded-2xl">
                {item.activity}
              </div>
            </div>
            <button className="" onClick={() => handleDelete(item.id)}>
              <PiTrashLight size={30} />
            </button>
          </div>
        ))}
      </div>

      <Link
        href="/todo"
        className="fixed bottom-0 text-center left-0 right-0 p-4"
      >
        check todo
      </Link>
    </div>
  );
};

export default Done;
