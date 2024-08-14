"use client"
import axios from 'axios'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import './App.css'

function App() {
  const form = useForm()
  const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/', // Base URL
    headers: {
      'Content-Type': 'application/json',
    }
  });

  const onSubmit = async(data) => {
    console.log(data);
    try {
       await api.post("users/login", data)
       .then((user) => {
        alert(user.data.data.user.username)
      });

    } catch (error) {
      console.log(error);
      
    }
    
  }

  return (
    <Form {...form} className="">
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="enter email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input placeholder="enter password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  </Form>
  )
}

export default App
