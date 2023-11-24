import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import api from "../../api";
import Header from "../Header";


export default function LayoutMain(){
  const [user, setUser] = useState({});
  async function getData(){
    const id = JSON.parse(localStorage.getItem('id'))
    console.log(id)
    if(id !== null){
      const {data} = await api.get(`/users/${Number(id)}`)
      setUser(data)
    }
  }
  useEffect(() => {
      getData()
  }, []);
  return(
    <>
      <Header avatar={user.avatar} notifications={user.notifications ?? []}/>
    </>
  )
}