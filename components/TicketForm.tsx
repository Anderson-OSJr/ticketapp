'use client';

import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { ticketSchema } from "@/ValidationSchemas/ticket";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css"; //Copy from https://www.npmjs.com/package/react-simplemde-editor, Usage item.
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

type TicketFormData = z.infer<typeof ticketSchema>

const TicketForm = () => {

    const form = useForm<TicketFormData>({
        resolver: zodResolver(ticketSchema)
    });

    async function onSubmit(values: z.infer<typeof ticketSchema>) {
        console.log(values);
    }

    return (
        <>
            <div className="rounded-md border w-full p-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8 w-full">

                        <FormField control={form.control} name="title" render={({field})=>(
                            <FormItem>
                                <FormLabel>Ticket Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ticket Title..." {...field}/>
                                </FormControl>
                            </FormItem>
                        )} />

                        <Controller name="description" control={form.control} render={(field) => (
                            <SimpleMDE placeholder="Description" {...field}/>
                        )}/>

                        <div className="flex w-full space-x-4">
                            <FormField control={form.control} name="status" render={({field}) => (
                                <FormItem>
                                    <FormLabel>Status</FormLabel>

                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Status..."/>
                                            </SelectTrigger>
                                        </FormControl>

                                        <SelectContent>
                                            <SelectItem value="OPEN">Open</SelectItem>
                                            <SelectItem value="STARTED">Started</SelectItem>
                                            <SelectItem value="CLOSED">Closed</SelectItem>
                                        </SelectContent>
                                        
                                    </Select>
                                </FormItem>
                            )}/>

                            <FormField control={form.control} name="priority" render={({field}) => (
                                <FormItem>
                                    <FormLabel>Priority</FormLabel>
                                    
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Priority..."/>
                                            </SelectTrigger>
                                        </FormControl>

                                        <SelectContent>
                                            <SelectItem value="HIGH">High</SelectItem>
                                            <SelectItem value="MEDIUM">Medium</SelectItem>
                                            <SelectItem value="LOW">Low</SelectItem>
                                        </SelectContent>
                                        
                                    </Select>
                                </FormItem>
                            )}/>
                        </div>

                    </form>
                </Form>
            </div>
        </>
        
    )
}

export default TicketForm