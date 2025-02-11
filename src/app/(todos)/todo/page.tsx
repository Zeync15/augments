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
import React, { FormEvent, useEffect, useState } from "react";
import { db } from "../../../firebase";
import { PiTrashLight } from "react-icons/pi";
import Link from "next/link";

interface ActivitiesProps {
  id: string;
  activity: string;
  createdAt: Date;
}

const Todo = () => {
  const [activity, setActivity] = useState("");
  const [activities, setActivities] = useState<ActivitiesProps[]>([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const q = query(collection(db, "todo"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    const activitiesList: ActivitiesProps[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as ActivitiesProps[];
    setActivities(activitiesList);
  };

  const handleAdd = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "todo"), {
        activity: activity,
        createdAt: new Date(),
      });
      setActivity("");
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      fetchItems();
    }
  };

  const handleDone = async (activity: ActivitiesProps) => {
    try {
      await addDoc(collection(db, "done"), {
        activity: activity.activity,
        createdAt: activity.createdAt,
      });
      await deleteDoc(doc(db, "todo", activity.id));
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      fetchItems();
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "todo", id));
    } catch (error) {
      console.error("Error deleting document: ", error);
    } finally {
      fetchItems();
    }
  };

  return (
    <div className="">
      <div className="text-center text-3xl">
        What do you want to do in the future?
      </div>

      <form onSubmit={handleAdd} className="flex flex-col mt-20">
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="Enter todo"
          required
          className="p-2 rounded-lg"
        />
        <button type="submit" className="mt-4">
          Add Item
        </button>
      </form>

      <div className="grid gap-4 mt-20 mx-auto">
        {activities.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <input type="checkbox" onClick={() => handleDone(item)} />
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

      <Link href='/done' className="fixed bottom-0 text-center left-0 right-0 p-4">
        check done
      </Link>
    </div>
  );
};

export default Todo;
