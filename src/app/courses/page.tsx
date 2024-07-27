"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";

// Define the type for the group data
interface Group {
  id: number;
  name: string;
}

const Courses: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    try {
      const response = await fetch(
        "https://7e06fa9a-a9ed-469c-851e-094b33332263-00-30aaaf9celq3y.sisko.replit.dev/groups"
      );
      if (!response.ok) {
        throw new Error(`Error fetching groups: ${response.statusText}`);
      }
      const data: Group[] = await response.json();
      setGroups(data);
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        {groups.length > 0 ? (
          groups.map((group) => <p key={group.id}>{group.name}</p>)
        ) : (
          <p>Loading groups...</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
